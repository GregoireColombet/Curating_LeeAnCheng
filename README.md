# Lee An-cheng (李安成) Curatorial Platform Documentation

This repository contains the architecture, feature specifications, standards crosswalks, prerequisites, and project roadmap for the **Lee An-cheng (李安成) Curatorial Platform & 3D Virtual Gallery**.

The documentation is published as an interactive, search-enabled documentation website using **MkDocs** and **Material for MkDocs**, hosted automatically via **GitHub Pages**.

---

## 🌐 Public Documentation Website

The live documentation site for external stakeholders is accessible at:

👉 **[https://gregoirecolombet.github.io/Curating_LeeAnCheng/](https://gregoirecolombet.github.io/Curating_LeeAnCheng/)**

* **Single Source of Truth**: All edits to `.md` files in `docs/` are automatically built and redeployed upon pushing to the `main` branch.
* **Full-Text Search & Navigation**: Instant search, light/dark mode, and mobile-responsive layout.
* **Interactive Diagrams**: Native Mermaid.js architecture and Gantt charts.

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions automated deployment to GitHub Pages
├── docs/                           # Markdown documentation files
│   ├── index.md                    # Platform Overview & Executive Summary
│   ├── standards.md                # Taiwan Standards & USA/France Crosswalk Engine
│   ├── architecture.md             # System Architecture & Technology Stack
│   ├── backend.md                  # Curatorial Back-Office & CMS Features
│   ├── frontend.md                 # Public Front Office & 3D Virtual Gallery
│   ├── prerequisites.md            # Archival, Digitization & Technical Prerequisites
│   ├── project-management.md       # 28-Week Roadmap, WBS & Quality Gates
│   ├── innovations.md              # AI Search, PBR Shaders, Provenance & WCAG
│   └── full-spec.md                # Consolidated Single-Page Specification
├── curating_platform_specifications.md # Standalone Single-File Document
├── paintings/                      # Artist collection paintings archive (1900-2010)
├── presentation/                   # Presentation materials
├── mkdocs.yml                      # MkDocs configuration & navigation structure
├── requirements.txt                # Python dependencies (mkdocs-material, pymdownx)
├── .gitignore                      # Git ignore file
└── README.md                       # Repository instructions
```

---

## 🚀 How to Enable GitHub Pages (One-Time Setup)

1. Go to your repository on GitHub: **[https://github.com/GregoireColombet/Curating_LeeAnCheng](https://github.com/GregoireColombet/Curating_LeeAnCheng)**
2. Click **Settings** (top navigation bar) $\rightarrow$ **Pages** (in the left sidebar).
3. Under **Build and deployment** $ightarrow$ **Source**:
   * Change from **"Deploy from a branch"** to **"GitHub Actions"**.
4. Push your changes to `main`:
   ```bash
   git add .
   git commit -m "feat: enable MkDocs with GitHub Actions deployment"
   git push origin main
   ```
5. In ~45 seconds, the site will be live at:
   **[https://gregoirecolombet.github.io/Curating_LeeAnCheng/](https://gregoirecolombet.github.io/Curating_LeeAnCheng/)**

---

## 🛠️ Local Development & Live Preview

To preview the documentation locally on your machine before pushing changes:

### 1. Create a Python Virtual Environment & Install Dependencies
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Start the Local MkDocs Dev Server
```bash
mkdocs serve
```

Open your browser and visit **`http://127.0.0.1:8000`**. The page will auto-reload in real time whenever you edit any `.md` file.

---

## ✍️ How to Evolve the Documentation

* **To update specific topics**: Edit the corresponding file inside the `docs/` folder (e.g. `docs/standards.md`, `docs/project-management.md`).
* **To add a new page**:
  1. Create a new markdown file in `docs/` (e.g. `docs/api-reference.md`).
  2. Add the page entry to the `nav` section in `mkdocs.yml`.
* **To publish updates**:
  ```bash
  git add .
  git commit -m "docs: update curatorial timeline and crosswalk specs"
  git push origin main
  ```
  GitHub Actions will automatically rebuild and deploy the new version in under 60 seconds.
