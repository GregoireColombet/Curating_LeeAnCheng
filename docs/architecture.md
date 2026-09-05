# System Architecture Overview

The platform uses a modern **Headless Architecture** decoupled into three main tiers:
1. **Curatorial Back-Office CMS** (Internal Management)
2. **Core API & IIIF Asset Processing Layer** (Microservices & CDN)
3. **Public Front Office** (Public Web Application & 3D Virtual Gallery)

---

## Architecture Diagram

```mermaid
graph TD
    subgraph BackOffice ["Curatorial Back Office (Admin Portal)"]
        CMS[Vue.js / React Admin Panel]
        SEAL[Seal Matrix & Bounding Box Tool]
        ROOM[3D Spatial Room Configurator]
        PRESS[Editorial & Press Kit Engine]
        TICKET_ADMIN[Ticketing & Quota Manager]
    end

    subgraph Storage ["Storage & Asset Layer"]
        S3_MASTER[S3 Glacier / Master TIFF 16-bit]
        S3_TILES[S3 Standard / Pyramid DZI Tiles]
        POSTGRES[(PostgreSQL 16 + PostGIS + pgvector)]
        REDIS[(Redis Cluster Cache)]
    end

    subgraph Services ["Core API & Media Services"]
        IIIF_SRV[Cantaloupe IIIF 3.0 Server]
        API_GATEWAY[GraphQL / REST API Gateway]
        XWALK[International Crosswalk Transformer]
        AI_EMBED[CLIP Multimodal Vector Engine]
        EDGE_CDN[Cloudflare Enterprise Edge CDN]
    end

    subgraph FrontOffice ["Public Front Office (Web & Mobile)"]
        WEB_UI[Next.js / Nuxt Public Portal]
        WEBGL_3D[Three.js / WebGL Virtual Gallery]
        ZOOM[OpenSeadragon IIIF Deep Zoom]
        AR_VIEW[Mobile AR Quick Look USDZ/WebXR]
        TICKET_UI[Time-Slot Reservation & Apple Wallet]
    end

    CMS --> API_GATEWAY
    SEAL --> API_GATEWAY
    ROOM --> API_GATEWAY
    PRESS --> API_GATEWAY
    TICKET_ADMIN --> API_GATEWAY

    API_GATEWAY --> POSTGRES
    API_GATEWAY --> REDIS
    API_GATEWAY --> XWALK
    API_GATEWAY --> AI_EMBED

    S3_MASTER --> IIIF_SRV
    IIIF_SRV --> S3_TILES
    S3_TILES --> EDGE_CDN

    EDGE_CDN --> ZOOM
    EDGE_CDN --> WEBGL_3D

    API_GATEWAY --> WEB_UI
    WEB_UI --> ZOOM
    WEB_UI --> WEBGL_3D
    WEB_UI --> AR_VIEW
    WEB_UI --> TICKET_UI
```

---

## Technology Stack Specifications

| Layer | Recommended Technology | Key Purpose |
| :--- | :--- | :--- |
| **Back Office UI** | React / Vue 3 + TailwindCSS | Responsive administration portal with rich interactive tools. |
| **Public Frontend** | Next.js (React) / Nuxt (Vue) | Server-side rendering (SSR), SEO optimization, multi-lingual routing. |
| **3D Engine** | Three.js / WebGL / WebXR | Real-time 60 FPS 3D virtual gallery with custom PBR surface shaders. |
| **Deep Zoom Viewer** | OpenSeadragon 4.0+ / Mirador 3 | IIIF-compliant high-resolution deep zoom inspection. |
| **IIIF Image Server** | Cantaloupe 5.0+ | Dynamic pyramid tile generator supporting IIIF Image & Presentation API 3.0. |
| **Database** | PostgreSQL 16 + PostGIS + `pgvector` | Relational data, geographic locations of galleries, and AI vector embeddings. |
| **Caching & Queue** | Redis 7 + BullMQ | Fast session storage, cache invalidation, and ticket reservation locking. |
| **Edge CDN** | Cloudflare / AWS CloudFront | Global edge caching for gigapixel image tiles and static WebGL assets. |
