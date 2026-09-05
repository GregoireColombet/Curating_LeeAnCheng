# Prerequisites for Database Accuracy & Platform Engineering

Before initiating software development and database ingestion, strict physical, archival, and infrastructural prerequisites must be established to ensure academic accuracy and technical stability.

---

## 1. Archival, Digitization & Curatorial Prerequisites

### A. High-Fidelity Digitization Standards (FADGI 4-Star / Metamorfoze Strict)
* **Capture Equipment**: Medium-format digital back (Phase One / Hasselblad 100MP+) or flatbed scanner for delicate paper works.
* **Color Management**: Target capture with X-Rite ColorChecker Digital SG; embedded custom ICC color profiles in 16-bit Adobe RGB or ProPhoto RGB.
* **Lighting**: Cross-polarized diffuse studio lighting to eliminate glare on ink varnish, accompanied by raking light detail captures to record Xuan paper grain and mounting seams.
* **Master File Format**: Uncompressed 16-bit TIFF with zero sharpening applied at capture.

### B. Physical Artwork Measurement Protocol
Distinct recording of:
1. Core painting image dimensions: $H \times W$ (cm).
2. Overall mounting dimensions (including silk borders and scroll rods): $H \times W \times D$ (cm).
3. Framed dimensions (for 鏡框 works): $H \times W \times D$ (cm).

### C. Epigraphy, Inscription & Seal Authentication Protocol
* **Seal Matrix (印譜)**: High-resolution isolated impressions of all genuine artist seals with physical dimensions (mm), carving style (*朱文/白文*), and character transcriptions.
* **Scholarly Transcription**: Scholarly transcription of all handwritten calligraphy poems, dates, dedication notes, and recipient names by an East Asian art historian.

### D. Legal, Copyright & Provenance Documentation
* High-res scans of historical invoices, gallery consignment agreements, certificate receipts, and publication pages.
* Explicit copyright status documentation (Artist Estate, Foundation, or Public Domain).

---

## 2. Metadata Ingestion & Database Schema Prerequisites

### Master Ingestion Data Dictionary (Normalized CSV/JSON Schema)
Standardized data ingestion sheet with strict column validation:

| Column Name | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `Artwork_ID` | String (UUID) | Unique canonical inventory code | `LAC-PTG-1985-001` |
| `Title_zh_Hant` | String | Original Traditional Chinese title | 墨韻乾坤 |
| `Title_en` | String | English translated title | *Rhythm of Ink* |
| `Title_fr` | String | French translated title | *Rythme de l'encre* |
| `Year_Gregorian` | Integer | Western Gregorian Year | `1985` |
| `Year_Minguo` | String | Taiwanese Minguo Year | `民國74年` |
| `Year_Ganzhi` | String | Sexagenary Lunar Cycle | `乙丑年` |
| `Medium_Category` | Enum | Controlled ink medium | `水墨` |
| `Support_Material` | Enum | Controlled paper/support | `宣紙` |
| `Mounting_Format` | Enum | Controlled mounting format | `立軸` |
| `Dimensions_Image_H_cm` | Float | Image height in cm | `136.5` |
| `Dimensions_Image_W_cm` | Float | Image width in cm | `68.0` |
| `Dimensions_Full_H_cm` | Float | Full mounting height in cm | `210.0` |
| `Dimensions_Full_W_cm` | Float | Full mounting width in cm | `80.5` |
| `Signature_Text` | String | Transcribed inscription | 李安成 寫於台北 |
| `Seals_JSON` | JSON | Array of Seal Matrix IDs & coords | `[{"seal_id":"S01","box":[0.8,0.9,0.05,0.05]}]` |
| `Current_Location` | String | Physical whereabouts | 誠品畫廊 (Eslite Gallery) |
| `Status` | Enum | Inventory status | `Consigned` |

---

## 3. Technical, Cloud & Third-Party Service Prerequisites

* **Cloud Infrastructure & Storage Tiers**:
  * AWS S3 Standard (active IIIF tiles) + S3 Glacier Flexible (cold master TIFFs).
  * Global Edge CDN (Cloudflare Enterprise / AWS CloudFront) configured for caching IIIF tile requests.
* **Database & Search Engine Selection**:
  * PostgreSQL 16+ with `pg_trgm` (fuzzy text search) and `PostGIS` (geospatial coordinates).
  * `pgvector` or Qdrant for storing CLIP image and text embeddings.
  * Redis cluster for session management, API caching, and real-time ticketing quotas.
* **IIIF Server Stack**:
  * High-performance Cantaloupe 5.0+ image server deployed on Kubernetes / Docker.
* **3D Assets & Spatial Library**:
  * Low-poly modular rooms (<50k tris, Draco compression) with PBR textures (Xuan paper, silk, wood frames).
* **API Credentials & Gateway Access**:
  * Ticketing APIs: Accupass API, Eventbrite API, Stripe Connect.
  * Mapping Services: Mapbox GL / Google Maps API keys.
