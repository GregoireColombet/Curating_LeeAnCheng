# Lee An-cheng (李安成) Curatorial Platform & Proposals

This repository hosts the interactive presentation website and comprehensive specifications for curating and cataloging the masterworks of Taiwanese modern ink painter **Lee An-cheng (李安成, 1959–2015)**.

The project addresses the preservation, cataloging, and exhibition of **52 master paintings (1979–2000s)** currently archived across **3 estate/family custodians**, engineered for international outreach (targeting exhibitions in France, Europe, the USA, and Taiwan).

---

## 🌐 Live Presentation Website

The interactive presentation website is deployed directly via **GitHub Pages**:

👉 **[https://gregoirecolombet.github.io/Curating_LeeAnCheng/](https://gregoirecolombet.github.io/Curating_LeeAnCheng/)**

### Key Interactive Features of the Website:
1. **The 3 Logical Proposals**: Detailed feature sets, architecture diagrams, costs, and timelines.
2. **Instant Bilingual Switcher**: Seamless 1-click toggle between **English** and **Traditional Chinese (繁體中文)**.
3. **Comprehensive Side-by-Side Comparison Matrix**: Cross-functional evaluation across UX, Backoffice CMS, Collection TMS, Custodian Logistics CRM, and International Standards (France Joconde, USA CDWA, Europe LIDO).
4. **Live Interactive Curatorial Demos**:
   * *Atmospheric Light/Dark Scroll Simulator* (James Turrell inspired).
   * *Horizontal Handscroll Unrolling Viewer* (Awwwards WebGL inspired).
   * *Interactive Epigraphy & Seal Matrix Inspector* (Rijksmuseum inspired).
   * *Automated Museum Metadata Crosswalk Generator* (France, USA, Taiwan).
5. **52 Masterworks Collection Explorer**: Interactive filterable archive of the 52 physical paintings by era and custodian.
6. **Decision Framework**: Interactive wizard to guide family and curators to the right proposal.

---

## 🏛️ The Three Proposals at a Glance

| Proposal | Scope | Backoffice & CRM | Primary Fit |
| :--- | :--- | :--- | :--- |
| **Proposal 1: Digital Monograph** | High-performance aesthetic presentation website | None ($0/mo hosting) | Rapid launch for public tribute and curator portfolio. |
| **Proposal 2: Dynamic Showcase CMS** | Dynamic frontend + Bilingual Showcase & Editorial CMS | Showcase & Layout CMS (~$30–$60/mo) | Active curation, rearranging featured works, publishing essays. |
| **Proposal 3: Full Museum Platform & CRM** | Frontend + 3D Virtual Gallery + Museum TMS + Logistics CRM + Export Engine | Full Museum TMS & 3-Custodian CRM (~$120–$250/mo) | International museum exhibitions (France/USA), loan tracking, epigraphy seals, and 3D spatial curation. |

---

## 📁 Repository Structure

```
├── index.html                      # Interactive proposal presentation web app
├── logo_stamp.jpeg                 # Artist authentic seal stamp
├── assets/
│   ├── css/
│   │   └── style.css               # Museum-grade stylesheet & design system
│   └── js/
│       ├── app.js                  # Multilingual engine & interactive demos
│       └── paintings-data.js       # Complete metadata for 52 artworks
├── paintings/                      # 52 physical paintings image archive (1979-2000s)
├── curating_platform_specifications.md # Full technical specification document
├── lee_ancheng_website_references.md   # UI/UX benchmarks & interactive adaptations
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages static deployment
└── README.md                       # Project documentation
```

---

## 🚀 How to Enable GitHub Pages

1. Navigate to repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Any push to `main` or `master` will deploy the static site automatically in under 30 seconds.
