import sys
sys.path.append('/Users/gregmair/Library/Python/3.9/lib/python/site-packages')

import cv2
import numpy as np

def main():
    img_path = '/Users/gregmair/.gemini/antigravity/brain/1bc696ae-5f7f-435a-b397-12e504d1fe89/.user_uploaded/media_1787431793939.png'
    img = cv2.imread(img_path)
    if img is None:
        print("Error loading image")
        return

    # Convert to HSV for accurate red segmentation
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    h, w, _ = img.shape

    # Red stamp base color ranges
    lower_red1 = np.array([0, 50, 45])
    upper_red1 = np.array([12, 255, 255])
    lower_red2 = np.array([168, 50, 45])
    upper_red2 = np.array([180, 255, 255])

    mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
    mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
    red_mask = cv2.bitwise_or(mask1, mask2)

    # Let's get the outer square boundary by taking the convex hull of the main red region
    contours, _ = cv2.findContours(red_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        print("No red mask contours found")
        return
        
    main_contour = max(contours, key=cv2.contourArea)
    hull = cv2.convexHull(main_contour)
    
    # Smooth the outer contour slightly
    epsilon = 0.003 * cv2.arcLength(hull, True)
    smooth_hull = cv2.approxPolyDP(hull, epsilon, True)

    # Now define a solid mask of the stamp base to query inside it
    stamp_base_mask = np.zeros((h, w), dtype=np.uint8)
    cv2.drawContours(stamp_base_mask, [smooth_hull], -1, 255, -1)

    # Get grayscale image
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Run Otsu's thresholding on the stamp pixels to segment the signature
    stamp_pixels = gray[stamp_base_mask > 0]
    _, thresh_1d = cv2.threshold(stamp_pixels, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    
    # Map back to 2D mask
    sig_mask = np.zeros((h, w), dtype=np.uint8)
    sig_mask[stamp_base_mask > 0] = thresh_1d.flatten()

    # Clean the signature mask to remove pixel noise and outer boundary artifact lines
    # The signature lines are completely inside the stamp base and not touching the outer border.
    # Let's erode the stamp base mask slightly to ignore boundary lines that could belong to dark background
    kernel_erode = cv2.getStructuringElement(cv2.MORPH_RECT, (7, 7))
    inner_stamp_mask = cv2.erode(stamp_base_mask, kernel_erode, iterations=1)
    
    # Keep only signature mask parts that are strictly inside the eroded mask
    sig_mask_cleaned = cv2.bitwise_and(sig_mask, inner_stamp_mask)

    # Morphological operations to link parts of signature
    kernel_sig = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    sig_mask_cleaned = cv2.morphologyEx(sig_mask_cleaned, cv2.MORPH_CLOSE, kernel_sig, iterations=1)
    sig_mask_cleaned = cv2.morphologyEx(sig_mask_cleaned, cv2.MORPH_OPEN, kernel_sig, iterations=1)

    # Find contours of the signature
    sig_contours, _ = cv2.findContours(sig_mask_cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_KCOS)

    # Write SVG
    svg_lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
    ]

    def contour_to_svg_path(contour):
        if len(contour) < 2:
            return ""
        path_str = f"M {contour[0][0][0]} {contour[0][0][1]}"
        for pt in contour[1:]:
            path_str += f" L {pt[0][0]} {pt[0][1]}"
        path_str += " Z"
        return path_str

    # Red stamp base
    stamp_path = contour_to_svg_path(smooth_hull)
    if stamp_path:
        svg_lines.append(f'  <path d="{stamp_path}" fill="#c0392b" />')

    # Signature strokes
    for sig_c in sig_contours:
        if cv2.contourArea(sig_c) > 15:  # Filter out small noise spots
            epsilon_sig = 0.001 * cv2.arcLength(sig_c, True)
            smooth_sig = cv2.approxPolyDP(sig_c, epsilon_sig, True)
            sig_path = contour_to_svg_path(smooth_sig)
            if sig_path:
                svg_lines.append(f'  <path d="{sig_path}" fill="#1a1a1a" />')

    svg_lines.append('</svg>')

    output_path = '/Users/gregmair/Desktop/Lee AnCheng/code/logo.svg'
    with open(output_path, 'w') as f:
        f.write('\n'.join(svg_lines))
    print("SVG generated successfully with refined boundary masking!")

if __name__ == '__main__':
    main()
