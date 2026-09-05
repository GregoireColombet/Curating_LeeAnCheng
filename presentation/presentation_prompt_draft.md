# Lee AnCheng Curating Platform & Website Project Presentation Plan

This document outlines the finalized project criteria and the tailored prompt for Google NotebookLM to generate the presentation.

---

## 1. Project Specifications (Based on Feedback)

* **Languages:** Dual-language support (English and Traditional Chinese) for both the administration platform and the public website.
* **Exhibition Goals:** International outreach, targeting countries like France. The platform will dynamically suggest curatorial narratives (categorized by year, influence, size, etc.) to adapt to different exhibition spaces.
* **Security & Ownership Tracking:** Essential private tracking of artwork locations, current custodians, contact details, and status when sent abroad or to external galleries.
* **Access Control:** Role-based access supporting multiple Administrators and Editors.
* **Exhaustive Technical Metadata:** Fields for conservation status, paper type, frame dimensions, condition reports, and shipping requirements.
* **Showcase Backend:** Backend portal allowing editors to curate showcased works, customize public titles, and toggle visibility.
* **Timeline:** Project launch by December 2026. A 3-4 week content review buffer is planned to finalize curated art texts.
* **Resources:** Web development team is ready; curation content is partially drafted and needs final reviews.

---

## 2. Final Google NotebookLM Prompt

*Copy and paste the text block below directly into Google NotebookLM alongside your source text file `Lee An Cheng 李安城.txt` and biographical source material to generate your presentation slides and speaking notes:*

```text
Act as an expert Product Manager and Creative Director. Generate a slide-by-slide presentation outline and detailed script for the "Lee AnCheng Curating Platform and Website" project. 

The presentation is designed for the relatives, friends, and family who own physical art pieces by Lee An-cheng (1959–2015) and are commissioning this system to facilitate international exhibitions (e.g., in France and worldwide).

Please detail the following slides, using a professional, respectful, and visionary tone:

Slide 1: Title & Project Mission
- Title: "Preserving a Legacy: The Lee AnCheng Curating Platform & Exhibition Website"
- Subtitle: "Connecting Traditional Ink Art to the Global Stage by December"
- Focus: Highlight the dual goals: cataloging physical works and presenting them to international curators.

Slide 2: The Core Challenge & The Solution
- Challenge: Physical works are dispersed among relatives and friends, making curation and shipping logistically complex.
- Solution: A secure, centralized database feeding a public, multilingual (English / Traditional Chinese) presentation website.

Slide 3: Platform Features (Backend & Curation Tools)
- Technical Specs: Dual-language interface, role-based access for multiple Admins/Editors.
- Exhaustive Metadata: Tracks paper type, frame dimensions, conservation reports, and international shipping requirements.
- Ownership & Transit Security: Private tracking of artwork locations, custodians, and transit logs when artworks are sent abroad.

Slide 4: Curatorial Suggestion Engine
- Goal: How the database suggests new curatorial narratives.
- Features: Dynamic filtering by creation year (e.g., early 1979 works, 1980s-1990s transitions, late 2000s series), technique (ink and water blending, flat/calligraphic brushes), influence, and size to customize proposals for different international gallery spaces.

Slide 5: Public Presentation Website & Showcase Backend
- Showcase Backend: Allows editors to choose which works are featured publicly, customize public titles, and arrange galleries.
- Features: Immersive interactive timeline, high-resolution galleries, and bi-lingual artist biography tailored for global curators.

Slide 6: Step-by-Step Development Roadmap (Target Launch: December)
- Phase 1 (Sept): Database schema design, secure hosting setup, and bulk image import (52 paintings from 1979-2000s).
- Phase 2 (Oct): Admin portal development, roles configuration, and private ownership tracking implementation.
- Phase 3 (Nov): Public-facing website design, interactive timeline, and showcase selection backend.
- Phase 4 (Late Nov - Dec): Content review buffer (completing and reviewing curated texts), final testing, and launch.

Slide 7: Resource Allocation & Action Plan
- Current Resources: Web development team is ready. Art curation text drafts are in progress.
- Immediate Next Steps: Finalizing high-resolution photography, collecting ownership data from relatives/friends, and commencing Phase 1 database modeling.
```
