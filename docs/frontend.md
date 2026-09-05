# Public Front Office & 3D Virtual Gallery

The Front Office provides a responsive, museum-grade web interface for art lovers, researchers, institutions, and collectors.

---

## 1. Immersive Virtual Gallery (WebGL / WebXR)

* **Real-Time 3D Navigation**:
  * 60+ FPS navigation powered by Three.js with WASD / Touch Joystick / Click-to-teleport controls.
  * "True-to-Scale" visual representation: Paintings are rendered according to their real-world millimeter dimensions relative to ambient room height and viewer perspective.
* **Artwork Focus Mode**:
  * Clicking an artwork transitions the camera smoothly to a front-on view with dynamic spotlights, bilingual wall labels, and an audio guide player.
* **Spatial Audio Guide**:
  * 3D positional audio narration that shifts dynamically in volume and stereo pan as visitors move through the exhibition.
* **Augmented Reality (AR) "View on Your Wall"**:
  * Instant 1:1 scale preview on iOS Safari (via Apple AR Quick Look `.usdz`) and Android Chrome (via WebXR Scene Viewer).

---

## 2. Collection Explorer & IIIF Deep Zoom

* **OpenSeadragon / Mirador Deep Zoom Viewer**:
  * Seamless gigapixel examination of brushstrokes, Xuan paper texture, ink bleed, and seal impressions without latency.
* **Faceted Search & Chronological Filter**:
  * Interactive timeline slider (e.g., 1900 to 2010), Minguo era filter, medium, theme, and dominant color palette extractor.
* **Dual Artwork Comparative Mode**:
  * Synchronized side-by-side zoom comparing two paintings from different creative periods.

---

## 3. Editorial & News Room

* **Curatorial Stories & Scholarly Essays**:
  * Long-form scholarly essays with sticky side-by-side artwork references and interactive footnotes.
* **Press & Media Hub**:
  * Filterable press releases with direct media kit downloads and press accreditation forms.

---

## 4. Partner Gallery & Physical Exhibition Hub

* **Interactive Global Map**:
  * World map displaying active and upcoming exhibitions across collaborating galleries.
  * Action buttons: *"View Gallery Profile"*, *"Get Directions"*, *"Inquire on Artworks at this Location"*.

---

## 5. Seamless Pre-Order Ticket & RSVP Interface

* **Time-Slot Reservation Widget**:
  * Live calendar showing available allocations per slot.
  * Instant Apple Wallet / Google Wallet pass (.pkpass) generation and QR code confirmation emails.
  * Outbound tracking redirects for external ticketing portals (Accupass, Eventbrite, Museum Box Office).

---

## 6. Artist Biography, Timeline & Catalogue Raisonné

* **Interactive Chronological Scroll**:
  * Multimedia timeline mapping key artistic milestones against Taiwanese and global art history contexts.
* **Institutional Collections Roster**:
  * Prominent list of permanent museum collections holding the artist's works.

---

## 7. Collector Inquiries & Private Viewing Rooms (PVR)

* **Context-Aware Inquiry Modal**:
  * Auto-fills artwork reference, medium, dimensions, and provenance details when a collector initiates an inquiry.
* **Private VIP Viewing Lounge**:
  * Tokenized access-controlled room for VIP collectors featuring unlisted works, direct curator voice notes, and acquisition documentation.
