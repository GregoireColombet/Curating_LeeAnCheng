# Museum-Grade Art Curating Platform: Architecture & Feature Specifications
*(Customized for Taiwanese Modern & Ink Art with International Export Pipelines)*

A comprehensive, production-ready specification for a museum-grade art curating platform engineered to conform with **Taiwanese cultural heritage metadata standards (Ministry of Culture, NTMoFA, TMB 2.0)**, equipped with an automated **Crosswalk & Export Engine for International Standards (USA: CDWA/VRA/DPLA, France/Europe: POP Joconde/LIDO/EDM)**, and powering an immersive public front office (virtual 3D gallery, IIIF deep zoom explorer, editorial room, partner gallery network, and ticketing integrations).

---

## Table of Contents
1. [Cultural Heritage Standards: Taiwan & International Ecosystem](#1-cultural-heritage-standards-taiwan--international-ecosystem)
   - [1.1 Taiwan National Cultural Standards & Art Conventions](#11-taiwan-national-cultural-standards--art-conventions)
   - [1.2 International Standard Export Pipelines (USA & France / Europe)](#12-international-standard-export-pipelines-usa--france--europe)
   - [1.3 Benchmark Examples from World-Class Institutions](#13-benchmark-examples-from-world-class-institutions)
2. [System Architecture & Data Crosswalk Pipeline](#2-system-architecture--data-crosswalk-pipeline)
3. [Backend & Back-Office (Curatorial CMS & Administration)](#3-backend--back-office-curatorial-cms--administration)
   - [3.1 Collection & Artwork Management (Taiwanese Art & Epigraphy Aware)](#31-collection--artwork-management-taiwanese-art--epigraphy-aware)
   - [3.2 International Standard Export & Crosswalk Engine](#32-international-standard-export--crosswalk-engine)
   - [3.3 3D Virtual Gallery Builder & Spatial Curator](#33-3d-virtual-gallery-builder--spatial-curator)
   - [3.4 News, Editorial & Media Relations Engine](#34-news-editorial--media-relations-engine)
   - [3.5 Partner Galleries & Physical Venue Management](#35-partner-galleries--physical-venue-management)
   - [3.6 Ticketing, Booking & Access Control Hub](#36-ticketing-booking--access-control-hub)
   - [3.7 Inquiries, Commerce & Verifiable Certificate of Authenticity (COA)](#37-inquiries-commerce--verifiable-certificate-of-authenticity-coa)
   - [3.8 Security, RBAC & Multi-Lingual Architecture](#38-security-rbac--multi-lingual-architecture)
4. [Frontend & Front-Office (Public Facing Experience)](#4-frontend--front-office-public-facing-experience)
   - [4.1 Immersive Virtual Gallery & 3D Viewing Rooms (WebGL / WebXR)](#41-immersive-virtual-gallery--3d-viewing-rooms-webgl--webxr)
   - [4.2 Collection Explorer & Deep Zoom (IIIF 3.0 Multi-Language)](#42-collection-explorer--deep-zoom-iiif-30-multi-language)
   - [4.3 Editorial & News Center](#43-editorial--news-center)
   - [4.4 Partner Gallery & Physical Exhibition Hub](#44-partner-gallery--physical-exhibition-hub)
   - [4.5 Seamless Pre-Order Ticket & RSVP Interface](#45-seamless-pre-order-ticket--rsvp-interface)
   - [4.6 Artist Biography, Timeline & Catalogue Raisonné](#46-artist-biography-timeline--catalogue-raisonné)
   - [4.7 Collector Inquiries & Private Viewing Rooms (PVR)](#47-collector-inquiries--private-viewing-rooms-pvr)
5. [Prerequisites for Database Accuracy & Platform Engineering](#5-prerequisites-for-database-accuracy--platform-engineering)
   - [5.1 Archival, Digitization & Curatorial Prerequisites](#51-archival-digitization--curatorial-prerequisites)
   - [5.2 Metadata Ingestion & Database Schema Prerequisites](#52-metadata-ingestion--database-schema-prerequisites)
   - [5.3 Technical, Cloud & Third-Party Service Prerequisites](#53-technical-cloud--third-party-service-prerequisites)
6. [Step-by-Step Project Management & Implementation Plan](#6-step-by-step-project-management--implementation-plan)
   - [6.1 Project Phasing & Timeline (28-Week Schedule)](#61-project-phasing--timeline-28-week-schedule)
   - [6.2 Work Breakdown Structure (WBS) & Role Matrix](#62-work-breakdown-structure-wbs--role-matrix)
   - [6.3 Quality Gates & Risk Mitigation Strategies](#63-quality-gates--risk-mitigation-strategies)
7. [Proposed Strategic Improvements & Innovations](#7-proposed-strategic-improvements--innovations)

---

## 1. Cultural Heritage Standards: Taiwan & International Ecosystem

### 1.1 Taiwan National Cultural Standards & Art Conventions
Because the platform represents Taiwanese modern and contemporary ink masters (such as Lee An-cheng 李安成), the core metadata schema natively incorporates Taiwan Ministry of Culture standards and traditional ink cataloging ontologies:

* **Taiwan Cultural Memory Bank 2.0 (國家文化記憶庫 2.0 - TMB / 文化部 MOC)**:
  * Full schema compliance for cultural artifact description, metadata exchange, OpenAPI interoperability, and standard Taiwanese Public Cultural Licensing / Creative Commons frameworks.
* **TELDAP (數位典藏與數位學習國家型科技計畫) Metadata Standards**:
  * Adherence to Taiwan’s foundational National Digital Archives guidelines for visual arts and calligraphy metadata structures.
* **Museum of Fine Arts Cataloging Frameworks (NTMoFA 國立臺灣美術館 / TFAM 臺北市立美術館 / KMFA 高雄市立美術館)**:
  * **Medium & Support Taxonomy**: Native classification for 水墨 (Ink and wash), 彩墨 (Color and ink), 設色 (Color wash), 礦物顏料 (Mineral pigments), 宣紙 (Xuan paper), 棉紙 (Cotton paper), 絹本 (Silk), 複合媒材 (Mixed media).
  * **Mounting & Format Typology (裝裱形制)**: 條幅/立軸 (Hanging scroll), 橫披 (Horizontal scroll), 手卷 (Handscroll), 鏡框/鏡心 (Framed / mounted core), 冊頁 (Album leaf), 屏風 (Folding screen), 捲軸 (Rolled scroll).
  * **Epigraphy, Inscriptions & Seals (款識與印章)**:
    * Inscription transcriptions (題款/詩跋), calligraphy script styles (行草, 隸書, 楷書), and location mapping.
    * Seal imprint records (鈐印): Distinction between 朱文 (Yang/Relief seal) and 白文 (Yin/Intaglio seal), Name seals (姓名印), Pseudonym/Studio seals (字號印), and Leisure/Aesthetic seals (閒章/押角章).
  * **Dual Calendar System**: Native indexing supporting Taiwanese Minguo Era (民國年, e.g., 民國69年), Gregorian Solar Year (1980), and Sexagenary Cycle (干支紀年, e.g., 庚申年).
  * **Authority Control & Romanization**:
    * Dual Romanization mapping: Wade-Giles (*Lee An-cheng* / *Li An-cheng*) <-> Hanyu Pinyin (*Lǐ Ānchéng*) <-> Traditional Chinese (*李安成*).
    * Linked authority URIs with the **National Central Library Authority Database (國家圖書館權威檔)** and **Academia Sinica Center for Digital Cultures (中研院數位文化中心 CCC)**.

---

### 1.2 International Standard Export Pipelines (USA & France / Europe)

The platform features an automated **Crosswalk Transformation Engine** that converts Taiwan-native curatorial records into international museum formats at the touch of a button:

```
                               ┌──────────────────────────────────────────────┐
                               │       TAIWAN MASTER METADATA RECORD          │
                               │  (TMB 2.0 / TELDAP / NTMoFA Ink Schema /     │
                               │   Trad. Chinese + Wade-Giles / Minguo Year)  │
                               └──────────────────────┬───────────────────────┘
                                                      │
                                   ┌──────────────────▼───────────────────┐
                                   │     ONTOLOGY CROSSWALK ENGINE        │
                                   │  (Getty AAT/ULAN + Multi-Lang Vocab) │
                                   └──────┬──────────────┬──────────────┬─┘
                                          │              │              │
                    ┌─────────────────────▼─┐   ┌────────▼────────────┐ ┌▼─────────────────────┐
                    │      USA STANDARDS    │   │  FRANCE STANDARDS   │ │   EUROPE / GLOBAL    │
                    ├───────────────────────┤   ├─────────────────────┤ ├──────────────────────┤
                    │ • CDWA / CDWA Lite    │   │ • POP Base Joconde  │ │ • LIDO 1.1 (ICOM)    │
                    │ • VRA Core 4.0 (XML)  │   │   (Ministère Cult.) │ │ • Europeana (EDM)    │
                    │ • DPLA Ingestion Profile│ │ • Unimarc / Intermarc│ │ • IIIF Manifests 3.0 │
                    │ • LOC / Getty Linked  │   │ • IdRef / BnF URI   │ │ • CIDOC-CRM (ISO)    │
                    └───────────────────────┘   └─────────────────────┘ └──────────────────────┘
```

#### A. Export to United States (USA) Standards
* **CDWA & CDWA Lite (Categories for the Description of Works of Art - Getty/Smithsonian)**:
  * Maps Taiwanese physical descriptions, measurements, and inscriptions to standard Getty CDWA XML elements (`cdwalite:indexingMaterialsTech`, `cdwalite:inscriptions`, `cdwalite:provenanceDescription`).
* **VRA Core 4.0 (Visual Resources Association)**:
  * Full XML export for US academic and museum visual resource centers, packaging work records, image surrogate records, and collection relationships.
* **DPLA Ingestion Format (Digital Public Library of America)**:
  * Qualified Dublin Core (QDC) export ready for harvesting by US national cultural aggregators.
* **Getty Vocabularies & US Library of Congress Alignment**:
  * Automated term reconciliation mapping Chinese medium/format concepts to Getty AAT URIs (e.g., 立軸 -> AAT 300015012 [hanging scrolls]; 水墨 -> AAT 300053271 [ink wash]).

#### B. Export to France & European Standards
* **POP - Base Joconde (Ministère de la Culture, France)**:
  * Automated generation of official French museum inventory records following the *Joconde* cataloging syntax:
    * `AUTR` (Auteur / Artist): *LEE An-cheng (李安成)*
    * `TITR` (Titre de l'œuvre): Translated French title & romanized original
    * `DENO` (Dénomination): *Peinture / Rouleau vertical* (Hanging scroll)
    * `TECH` (Techniques & Matériaux): *Encre de Chine et couleur sur papier de riz (Xuan)*
    * `DIM` (Dimensions): *H. en cm ; L. en cm*
    * `PERI` (Époque / Période): *4e quart 20e siècle (1980)*
    * `INS` (Inscriptions / Signatures): Transcribed and translated artist seals (*Sceau de l'artiste en bas à droite*)
    * `STAT` (Statut juridique): Ownership, copyright, and inventory number.
* **LIDO 1.1 (Lightweight Information Describing Objects - ICOM / CIDOC)**:
  * The international XML harvesting standard for European museum portals and Franco-German digital archives.
* **Europeana Data Model (EDM)**:
  * Semantic RDF/XML and JSON-LD data structure ready for direct ingestion into the European cultural platform **Europeana**.
* **IdRef & BnF (Bibliothèque nationale de France) Identifier Linking**:
  * Semantic links to French national authority files and international ISNI/ORCID identifiers.

---

### 1.3 Benchmark Examples from World-Class Institutions

| Institution / Entity | Best-in-Class Feature | Reference Takeaway for Platform |
| :--- | :--- | :--- |
| **National Palace Museum (Taipei) / NTMoFA** | Open Data portal, seal/calligraphy tagging, ink texture documentation | Traditional Chinese epigraphy fields, dual calendar indexing. |
| **Rijksmuseum (Amsterdam)** | Open-access IIIF deep zoom, palette extraction, user curation boards | High-fidelity asset delivery, color-based discovery. |
| **Centre Pompidou & Musée Guimet (Paris)** | Joconde/POP compliance, Asian art monographs, exhibition archives | French standard compatibility, bilingual French-Chinese curatorial essays. |
| **MoMA / Met (New York)** | CDWA Open Access API, dynamic collection search, unified ticketing | US export readiness, rich provenance chronologies, ticketing integration. |
| **David Zwirner / Hauser & Wirth** | Online Viewing Rooms (OVR), bespoke VIP access, curatorial storytelling | High-touch editorial design, lead capture, private viewing rooms. |
| **Studio Olafur Eliasson / teamLab** | Immersive WebGL, spatial computing, interactive installations | 3D virtual exhibition spaces, spatial audio, interactive lighting. |

---

## 2. System Architecture & Data Crosswalk Pipeline

```
                               ┌──────────────────────────────────────────────┐
                               │           CURATORIAL BACK OFFICE             │
                               │  (Vue / React CMS + Admin Management Portal) │
                               └──────┬──────────────┬──────────────┬─────────┘
                                      │              │              │
           ┌──────────────────────────▼──┐    ┌──────▼──────┐   ┌───▼──────────────────┐
           │ Collection & IIIF Engine    │    │ 3D Spatial  │   │ Editorial, Booking & │
           │ (TMB 2.0 / LIDO / CDWA /    │    │ Room Editor │   │ Partner Network Hub  │
           │  POP Joconde Crosswalk)     │    │ (WebGL/3D)  │   │ (Tickets/Galleries)  │
           └──────────────────────────┬──┘    └──────┬──────┘   └───┬──────────────────┘
                                      │              │              │
                                      └───────┐      │      ┌───────┘
                                              ▼      ▼      ▼
                               ┌──────────────────────────────────────────────┐
                               │       CORE API LAYER & ASSET PIPELINE        │
                               │   (Node / Go / Python + GraphQL / REST +     │
                               │     IIIF Cantaloupe / Cloudinary CDN)        │
                               └──────────────────────┬───────────────────────┘
                                                      │
                               ┌──────────────────────▼───────────────────────┐
                               │            PUBLIC FRONT OFFICE               │
                               │  (Next.js / Nuxt + Three.js / WebXR WebGL    │
                               │   + OpenSeadragon IIIF Deep Zoom Viewer)     │
                               └──────────────────────────────────────────────┘
```

---

## 3. Backend & Back-Office (Curatorial CMS & Administration)

### 3.1 Collection & Artwork Management (Taiwanese Art & Epigraphy Aware)
* **Master Cataloging Engine**:
  * **Multilingual Title & Inscription**: Original Traditional Chinese (繁體中文), Wade-Giles / Pinyin romanization, English, and French titles.
  * **Era & Date Handler**: Automatic bidirectional conversion between Minguo Year (民國紀年), Western Gregorian Year, and Sexagenary Lunar Cycle (干支紀年).
  * **Ink Medium & Mounting Metadata**: Specific picklists for East Asian media (水墨, 彩墨, 設色, 礦物顏料) and traditional mountings (立軸, 橫披, 手卷, 鏡框, 冊頁, 屏風).
  * **Epigraphy & Seal Transcription Engine**:
    * Seal inventory tracking: Seal shape (square, oval, gourd), carving technique (朱文/白文), inscription text, seal carver (if known), and interactive bounding-box placement on the master painting image.
  * **Provenance & Ownership Chain**: Structured chronology of acquisitions, collectors, galleries, institutional donations, and auction references.
  * **Exhibition & Literature History**: Cross-referenced catalogue raisonné records, historic exhibitions, and monograph citations.
* **Digital Asset Management (DAM) & IIIF Image Processing**:
  * Automated tile generation (Deep Zoom `.dzi`, Pyramid TIFF).
  * Color space & ICC profile preservation (DCI-P3 / wide-gamut sRGB) ensuring accurate rendering of subtle ink tones and paper aging.
  * Multi-tiered asset generation: Master archival TIFF/RAW, web delivery (WebP/AVIF), and press-ready 300 DPI CMYK packages.

### 3.2 International Standard Export & Crosswalk Engine
* **One-Click Export Profiles**:
  * **Taiwan TMB 2.0**: JSON/OpenAPI format compliant with Ministry of Culture guidelines.
  * **USA CDWA Lite / VRA Core 4.0**: Validated XML exports ready for US institutional databases (TMS, PastPerfect, CollectiveAccess).
  * **France POP / Joconde**: Pre-formatted CSV/XML export matched to the French Ministry of Culture cataloging structure.
  * **Europeana / LIDO 1.1**: Standardized XML data feeds for international museum aggregators.
  * **IIIF Manifest 3.0**: Multilingual JSON-LD manifests with embedded RFC 5646 language maps (`zh-Hant`, `en`, `fr`).
* **Term Reconciliation & Nomenclature Dictionary**:
  * Automated cross-lingual ontology dictionary mapping Chinese terms to French and English equivalents:
    * *水墨設色* -> *Ink and color on paper* -> *Encre et couleurs sur papier*
    * *立軸* -> *Hanging scroll* -> *Rouleau vertical*
    * *鏡心* -> *Unmounted painting core / Mounted in frame* -> *Peinture montée sous cadre*
    * *朱文姓名印* -> *Artist name seal in relief (Zhuwen)* -> *Sceau nominatif de l'artiste en relief*

### 3.3 3D Virtual Gallery Builder & Spatial Curator
* **Spatial Room Configurator**:
  * Modular 3D room presets (Minimalist White Cube, Traditional Courtyard Hall, Industrial Loft, Dark Ambient Room) or custom `.glb` imports.
  * Drag-and-drop artwork placement with automatic millimeter-accurate real-world scaling.
  * Lighting studio: Adjustable spotlights, color temperature (3000K–5000K), wall finishes, and floor reflectance.
* **Curatorial Guided Tour Sequence**:
  * Waypoint editor to configure automated camera paths, step-by-step tour stops, and localized audio commentary clips (Traditional Chinese, English, French).
  * In-scene didactic elements: 3D vinyl wall text, introductory panels, and embedded video screens.

### 3.4 News, Editorial & Media Relations Engine
* **Editorial Article & Storytelling CMS**:
  * Rich block editor supporting embedded IIIF deep-zoom widgets, split-screen comparisons, and audio-visual archives.
  * Categories: *Exhibitions*, *Press Releases*, *Curatorial Essays*, *Monographs*, *Videos & Talks*.
* **Digital Press Room & Media Kit Generator**:
  * One-click media kit bundler: Generates downloadable `.zip` packages with high-resolution press images (with caption/credit sheets) and PDF press releases.
  * Embargo scheduler for timed press releases and password-protected preview links for accredited journalists.

### 3.5 Partner Galleries & Physical Venue Management
* **Global Gallery & Institution Network Directory**:
  * Profiles for partner galleries, museums, and art fair booths (e.g., Eslite Gallery 誠品畫廊, Kaohsiung Museum of Fine Arts, Art Basel, Taipei Dangdai).
  * Synchronization with Google Maps / Apple Maps geolocation and opening hours.
* **Consignment & Loan Tracking**:
  * Real-time location tracker for artworks on loan, in transit, or consigned to partner galleries.

### 3.6 Ticketing, Booking & Access Control Hub
* **Ticketing Engine & External Integrations**:
  * Native reservation engine for free/RSVP time-slot ticketing.
  * Integration hooks for major ticketing platforms (**Tessitura, Eventbrite, SecuTix, Stripe, Tiqets, Klook, Accupass / 活動通**).
  * Capacity management per time slot with automated waitlist handling.
* **VIP & Collector Private Access**:
  * Access keys and tokenized invite links for Private Viewing Rooms (PVR) with visitor engagement metrics (view time, zoom depth).

### 3.7 Inquiries, Commerce & Verifiable Certificate of Authenticity (COA)
* **Curatorial Inquiry Pipeline**:
  * Centralized dashboard capturing price requests, acquisition inquiries, institutional loan requests, and press inquiries.
  * Integration with art-world CRMs (Artsy, Artlogic, HubSpot).
* **Cryptographic Certificate of Authenticity (COA) Engine**:
  * Automatic generation of cryptographically verifiable or print-ready PDF COAs with unique serial numbers, seal transcriptions, and digital signatures.

### 3.8 Security, RBAC & Multi-Lingual Architecture
* **Role-Based Access Control (RBAC)**: Fine-grained permissions for Chief Curators, Registrars, Press Officers, 3D Spatial Designers, and Admin Staff.
* **Full Multilingual Architecture**: Native support for Traditional Chinese (繁體中文), English, and French for all artwork titles, epigraphy, essays, and UI labels.

---

## 4. Frontend & Front-Office (Public Facing Experience)

### 4.1 Immersive Virtual Gallery & 3D Viewing Rooms (WebGL / WebXR)
* **First-Person & Guided Navigation**:
  * Smooth WASD / Touch Joystick / Click-to-teleport navigation in 60+ FPS WebGL (Three.js / Babylon.js).
  * "True-to-Scale" visual representation (artwork scaled against human proportions and ambient wall heights).
* **Artwork Focus Mode**:
  * Smooth camera transition to front-on view with interactive lighting, detailed museum wall labels (with seal notes), audio guide player, and deep zoom toggle.
* **Spatial Audio Guide**:
  * Positional 3D audio narration that changes volume and panning as visitors navigate the gallery space (in Mandarin, English, French).
* **AR (Augmented Reality) Quick Look**:
  * "View on Your Wall" feature for mobile devices (USDZ for iOS Safari and WebXR / Scene Viewer for Android).

### 4.2 Collection Explorer & Deep Zoom (IIIF 3.0 Multi-Language)
* **OpenSeadragon / Mirador Deep Zoom Viewer**:
  * Gigapixel inspection revealing paper textures, brushwork, ink saturation, and seal impressions without download lag.
* **Faceted Search & Chronological Filter**:
  * Interactive timeline slider (e.g., 1900 to 2010), Minguo era filter, medium, theme, dominant color extraction filter, and provenance status.
* **Dual Artwork Comparative Viewer**:
  * Side-by-side synchronized zoom allowing scholars and collectors to compare techniques and periods.

### 4.3 Editorial & News Center
* **Curatorial Stories & Scholarly Essays**:
  * Engaging long-form essays with sticky side-by-side artwork references and interactive footnotes.
* **Press & Media Hub**:
  * Public-facing press release archive with direct media kit downloads and press inquiry contact forms.

### 4.4 Partner Gallery & Physical Exhibition Hub
* **Interactive Global Exhibition Map**:
  * Visual world map displaying current and upcoming exhibitions across collaborating galleries in Taiwan, USA, Europe, and Asia.
  * Direct action buttons: *"View Gallery Profile"*, *"Directions"*, *"Inquire on Artworks at this Location"*.

### 4.5 Seamless Pre-Order Ticket & RSVP Interface
* **Time-Slot Reservation Widget**:
  * Interactive calendar showing live availability per slot.
  * Instant Apple Wallet / Google Wallet pass (.pkpass) generation and QR code confirmation emails.
  * Outbound tracking redirects for external ticketing portals (Accupass, Eventbrite, Museum Box Office).

### 4.6 Artist Biography, Timeline & Catalogue Raisonné
* **Interactive Chronological Scroll**:
  * Multimedia timeline mapping key artistic milestones against Taiwanese and global art history contexts.
* **Institutional Collections Roster**:
  * Prominent list of museum permanent collections holding the artist's works (e.g., Taipei Fine Arts Museum, National Taiwan Museum of Fine Arts, international private collections).

### 4.7 Collector Inquiries & Private Viewing Rooms (PVR)
* **High-Touch Inquiry Form**:
  * Context-aware inquiry modal auto-filling artwork metadata, provenance reference, and collector details.
* **Private VIP Viewing Lounge**:
  * Access-controlled digital room for VIP collectors featuring unlisted pieces, direct curator voice notes, and acquisition documentation.

---

## 5. Prerequisites for Database Accuracy & Platform Engineering

Before initiating software development and database ingestion, strict physical, archival, and infrastructural prerequisites must be established to ensure academic accuracy and technical stability.

```
       ┌────────────────────────────────────────────────────────────────────────┐
       │                       PREREQUISITE WORKSTREAMS                         │
       └───────┬────────────────────────┬────────────────────────┬──────────────┘
               │                        │                        │
       ┌───────▼────────┐       ┌───────▼────────┐       ┌───────▼────────┐
       │ Archival &     │       │ Metadata &     │       │ Infrastructure │
       │ Digitization   │       │ Translation    │       │ & Cloud Tech   │
       │ Standards      │       │ Normalization  │       │ Stacks         │
       └────────────────┘       └────────────────┘       └────────────────┘
```

### 5.1 Archival, Digitization & Curatorial Prerequisites
* **High-Fidelity Digitization Standards (FADGI 4-Star / Metamorfoze Strict)**:
  * **Capture Equipment**: Medium-format digital back (Phase One / Hasselblad 100MP+) or flatbed scanner for delicate paper works.
  * **Color Management**: Target capture with X-Rite ColorChecker Digital SG; embedded custom ICC color profiles in 16-bit Adobe RGB or ProPhoto RGB.
  * **Lighting**: Cross-polarized diffuse studio lighting to eliminate glare on ink varnish, accompanied by raking light detail captures to record Xuan paper grain and mounting seams.
  * **Master File Format**: Uncompressed 16-bit TIFF with zero sharpening applied at capture.
* **Physical Artwork Measurement Protocol**:
  * Distinct recording of:
    1. Core painting image dimensions: $H 	imes W$ (cm).
    2. Overall mounting dimensions (including silk borders and scroll rods): $H 	imes W 	imes D$ (cm).
    3. Framed dimensions (for 鏡框 works): $H 	imes W 	imes D$ (cm).
* **Epigraphy, Inscription & Seal Authentication Protocol**:
  * Compilation of an authoritative **Seal Matrix (印譜)**: High-resolution isolated impressions of all genuine artist seals with physical dimensions (mm), carving style (朱文/白文), and character transcriptions.
  * Scholarly transcription of all handwritten calligraphy poems, dates, dedication notes, and recipient names by an East Asian art historian.
* **Legal, Copyright & Provenance Documentation**:
  * High-res scans of historical invoices, gallery consignment agreements, certificate receipts, and publication pages.
  * Explicit copyright status documentation (Artist Estate, Foundation, or Public Domain).

### 5.2 Metadata Ingestion & Database Schema Prerequisites
* **Master Ingestion Data Dictionary (Normalized CSV/JSON Schema)**:
  * Standardized data ingestion sheet with strict column validation:
    * `Artwork_ID` (Unique UUID + Canonical Inventory Code, e.g., `LAC-PTG-1985-001`)
    * `Title_zh_Hant`, `Title_en`, `Title_fr`
    * `Year_Gregorian` (Integer), `Year_Minguo` (String), `Year_Ganzhi` (String), `Circa_Flag` (Boolean)
    * `Medium_Category` (Controlled: 水墨 / 彩墨 / 設色 / 礦物顏料 / 油畫)
    * `Support_Material` (Controlled: 宣紙 / 棉紙 / 絹本 / 畫布 / 夾宣)
    * `Mounting_Format` (Controlled: 立軸 / 橫披 / 手卷 / 鏡框 / 鏡心 / 冊頁)
    * `Dimensions_Image_H_cm`, `Dimensions_Image_W_cm`
    * `Dimensions_Full_H_cm`, `Dimensions_Full_W_cm`, `Dimensions_Full_D_cm`
    * `Signature_Location`, `Signature_Text`
    * `Seals_JSON` (Array of objects referencing Seal Matrix IDs and normalized coordinates `[x, y, w, h]`)
    * `Current_Location` (Gallery / Private Collection / Museum Loan / Storage Facility)
    * `Status` (Archived / Permanent Collection / Consigned / Sold)
* **Controlled Vocabulary & Ontology Seed Files**:
  * Cross-walk translation table aligning Taiwanese terms to Getty AAT and French Joconde vocabularies.
  * Master Artist Authority File (Wade-Giles, Pinyin, Traditional Hanzi, ISNI, ULAN ID, Wikidata ID).

### 5.3 Technical, Cloud & Third-Party Service Prerequisites
* **Cloud Infrastructure & Storage Tiers**:
  * Object storage bucket with tiered lifecycle (e.g., AWS S3 Standard for active tiles, S3 Glacier Flexible for cold master TIFFs).
  * Global Edge CDN (Cloudflare Enterprise / AWS CloudFront) configured for caching IIIF tile requests.
* **Database & Search Engine Selection**:
  * **Primary Relational DB**: PostgreSQL 16+ with `pg_trgm` (fuzzy text search) and `PostGIS` (geospatial coordinates for partner galleries).
  * **Vector Database / Extension**: `pgvector` or Qdrant for storing CLIP image and text embeddings.
  * **Cache Layer**: Redis cluster for session management, API caching, and real-time ticketing quotas.
* **IIIF Server Stack**:
  * High-performance IIIF 3.0 server (Cantaloupe 5.0+ or Serverless Sharp-based tile generator) deployed with dynamic pyramid generation (`.dzi` / `.tif`).
* **3D Assets & Spatial Library**:
  * Optimized 3D base rooms (White Cube, Historic Hall) modeled in Blender with polygon budget under 50,000 tris and Draco compression.
  * Physically Based Rendering (PBR) texture maps (Roughness, Normal, Metallic, Ambient Occlusion) for gallery floors, plaster walls, and silk mountings.
* **API Credentials & Gateway Access**:
  * Ticketing APIs: Accupass API, Eventbrite API, or Stripe Connect test keys.
  * Mapping Services: Mapbox GL / Google Maps Platform API key.
  * AI & Embeddings: OpenAI API / HuggingFace CLIP model weights endpoint.

---

## 6. Step-by-Step Project Management & Implementation Plan

A structured 28-week agile rollout plan divided into 6 strategic phases.

```
Weeks  01-04        05-08        09-14         15-20         21-24         25-28
       ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
       │ Phase 1  │ │ Phase 2  │ │ Phase 3   │ │ Phase 4   │ │ Phase 5   │ │ Phase 6   │
       │ Archival │ │ Database │ │ CMS &     │ │ 3D Virtual│ │ Ticketing │ │ QA, Sec.  │
       │ & Digitize│ │ & IIIF   │ │ Crosswalk │ │ Gallery & │ │ & Partner │ │ & Launch  │
       │ Prep     │ │ Pipeline │ │ Engine    │ │ Frontend  │ │ Sync Hub  │ │           │
       └──────────┘ └──────────┘ └───────────┘ └───────────┘ └───────────┘ └───────────┘
```

### 6.1 Project Phasing & Timeline (28-Week Schedule)

#### Phase 1: Archival Inventory, Digitization & Authority Setup (Weeks 1–4)
* **Milestone 1.1**: Complete physical inventory and photography of artworks following FADGI 4-star standards.
* **Milestone 1.2**: Finalize the artist Seal Matrix (印譜) and authenticate all calligraphy inscriptions.
* **Milestone 1.3**: Validate master data ingestion spreadsheets (dates, dimensions, provenance records).
* **Deliverables**: Verified master archival TIFF collection, Seal ID catalog, populated clean CSV data sheet.

#### Phase 2: Core Infrastructure, Database & IIIF Asset Pipeline (Weeks 5–8)
* **Milestone 2.1**: Set up Cloud storage buckets, CDN distribution, and PostgreSQL schema.
* **Milestone 2.2**: Deploy and benchmark the Cantaloupe IIIF 3.0 image server.
* **Milestone 2.3**: Automated asset pipeline: Batch conversion of master TIFFs into Deep Zoom pyramid tiles with automated ICC color space preservation.
* **Deliverables**: Operating IIIF endpoint returning validated Image API 3.0 and Presentation API 3.0 manifests.

#### Phase 3: Curatorial Back-Office CMS & Crosswalk Engine (Weeks 9–14)
* **Milestone 3.1**: Build the Collection Management System (CMS) with multilingual form inputs, seal coordinate mapper, and provenance timeline builder.
* **Milestone 3.2**: Develop the **International Crosswalk Engine** (Taiwan TMB 2.0 -> USA CDWA/VRA -> France POP Joconde / Europe LIDO 1.1).
* **Milestone 3.3**: Implement Editorial & News CMS with rich block editors and press kit generator.
* **Deliverables**: Fully operational Admin Back Office with Role-Based Access Control (RBAC) and 1-click XML/JSON export capabilities.

#### Phase 4: 3D Virtual Gallery Builder & Public Front Office (Weeks 15–20)
* **Milestone 4.1**: Develop WebGL / Three.js 3D spatial room engine with camera navigation, lighting studio, and real-scale artwork placement.
* **Milestone 4.2**: Implement Public Web UI (Next.js / Nuxt) with OpenSeadragon IIIF Deep Zoom, faceted search, chronological timeline slider, and bilingual editorial reading room.
* **Milestone 4.3**: Integrate Mobile AR Quick Look (`.usdz` / WebXR Scene Viewer) for "View on Your Wall".
* **Deliverables**: Live staging 3D Virtual Gallery and high-speed Public Front Office.

#### Phase 5: Ticketing, Partner Hub & VIP Private Viewing Rooms (Weeks 21–24)
* **Milestone 5.1**: Implement time-slot reservation module with calendar quota management and QR/Apple Wallet pass generation.
* **Milestone 5.2**: Connect external ticketing webhooks (Accupass, Eventbrite, Stripe).
* **Milestone 5.3**: Build Partner Gallery Directory with interactive Mapbox global map and consignment tracker.
* **Milestone 5.4**: Implement tokenized Private Viewing Rooms (PVR) for VIP collectors and collectors inquiry pipeline.
* **Deliverables**: End-to-end booking and VIP collector portal active on staging.

#### Phase 6: QA, Security Audit, Academic Review & Global Launch (Weeks 25–28)
* **Milestone 6.1**: Academic metadata validation by East Asian art history scholars and museum registrars.
* **Milestone 6.2**: Cross-device WebGL performance optimization (ensuring 60 FPS on mobile devices and budget laptops).
* **Milestone 6.3**: Security penetration testing, rate limiting, and WCAG 2.2 accessibility compliance audit.
* **Milestone 6.4**: Production deployment, DNS cutover, and search engine indexation.
* **Deliverables**: Production launch of the platform.

---

### 6.2 Work Breakdown Structure (WBS) & Role Matrix

| Role | Key Responsibilities in Project |
| :--- | :--- |
| **Lead Curator & Art Historian** | Metadata verification, seal transcription, curatorial essay authoring, exhibition narrative design. |
| **Registrar / Digital Archivist** | Artwork photography supervision, physical dimension auditing, ingestion spreadsheet validation. |
| **Technical Project Manager (TPM)** | Sprint planning, cross-functional coordination, milestone tracking, risk management. |
| **Fullstack Lead / CMS Architect** | Relational DB modeling, GraphQL/REST API layer, Back-Office CMS, crosswalk export engine. |
| **3D WebGL / Graphics Engineer** | Three.js / WebGL virtual gallery engine, shader development, spatial audio, lighting optimization. |
| **Frontend UI/UX Engineer** | Public web interface (Next.js), OpenSeadragon IIIF viewer integration, ticketing & editorial views. |
| **DevOps & Cloud Engineer** | AWS/Cloudflare infrastructure, IIIF server cluster, CDN cache invalidation, automated CI/CD pipelines. |

---

### 6.3 Quality Gates & Risk Mitigation Strategies

| Risk Factor | Probability / Impact | Preventative Mitigation Strategy |
| :--- | :--- | :--- |
| **Inaccurate Epigraphy & Seal Misidentification** | Medium / High | Mandatory two-scholar peer review for all seal transcriptions before locking database records. |
| **Gigapixel Image Latency & Bandwidth Costs** | High / High | Cloudflare edge caching for all IIIF `.dzi` tiles; pre-generated static tile caches for key collection highlights. |
| **WebGL Performance Lag on Mobile Devices** | High / Medium | Level-of-Detail (LOD) texture swapping, Draco geometry compression, dynamic resolution scaling, and 2D fallback mode. |
| **Metadata Incompatibility with Overseas Museums** | Medium / High | Built-in XSD schema validation tests against official CDWA, LIDO, and POP Joconde XML schemas during CI/CD. |
| **Ticketing Quota Race Conditions** | Low / High | Atomic Redis transactions with distributed locks to prevent double-booking during peak reservation surges. |

---

## 7. Proposed Strategic Improvements & Innovations

To future-proof the platform and establish an international benchmark, the following strategic enhancements are recommended:

### 1. AI-Powered Visual Similarity & Semantic Search (CLIP / Multimodal Embeddings)
* **Visual Match Search**: Allow visitors to upload an image, snapshot, or color swatch to find works sharing visual composition, ink density, or subject matter.
* **Domain-Specific Curatorial AI Guide**: A conversational agent fine-tuned on the artist’s monographs, interviews, and exhibition catalogues to provide accurate, scholarly answers to visitor questions.

### 2. Physically Based Rendering (PBR) & Dynamic Surface Shaders
* Enhance virtual gallery materials with normal and roughness maps to simulate real-world ink wash absorption, Xuan paper fibers, and mineral pigment reflectance as virtual light moves across the canvas.

### 3. Digital Condition Reporting & Conservation Timeline
* Back-office module allowing conservators and registrars to annotate gigapixel images with condition reports (creases, humidity spots, mounting repairs) with time-stamped visual layers.

### 4. Hybrid On-Site Museum Mode (PWA & Kiosk Sync)
* Progressive Web App architecture enabling physical museums and galleries to deploy the system on touchscreens, iPads, and wall-mounted kiosks with offline caching.

### 5. Cryptographic Provenance & Digital Certificate of Authenticity (W3C Verifiable Credentials)
* Tamper-proof, cryptographically signed digital certificates of authenticity tied to the platform’s canonical database, safeguarding provenance and preventing counterfeiting.

### 6. Universal Accessibility (WCAG 2.2 AAA Standards)
* AI-assisted alt-text generation for all artwork imagery.
* Screen-reader-friendly 2D fallback view for all 3D virtual exhibitions, complete with high-contrast UI and audio descriptions.
