# TimeMap India

An interactive historical atlas and learning interface for exploring the Indian subcontinent through time.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ (Vite 8 requirement).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Current frontend features

- Dark historical-atlas interface
- Leaflet map with CARTO dark tiles (no API key is required for this public tile endpoint)
- Timeline from 500 BCE to 1947 CE, with play/pause, step controls and historical milestones
- Searchable places and events
- Toggleable territory, place and event layers
- Schematic period-filtered outlines for Mauryan, Gupta, Chola, Delhi Sultanate, Vijayanagara, Mughal and Maratha polities
- Clickable map markers and territory popups with chronology, capital/centre, source notes and confidence caveats
- Responsive layout

## Historical geography: read this before interpreting the polygons

The territory outlines in `src/data/territories.js` are **schematic teaching aids**, not GIS-accurate borders, surveyed frontiers, or year-by-year reconstructions. Most are deliberately marked low confidence. Polities expanded, contracted, governed through subordinate rulers, and exercised influence beyond areas of direct administration. A single polygon cannot represent those distinctions.

Each feature has a source note and a limitations note. The listed books are starting points for research, not claims that the hand-drawn geometry was digitized from those works. Replace these schematic shapes with georeferenced historical maps or curated GeoJSON from traceable sources before using them for research or formal publication.

## Project structure

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    ExplorePanel.jsx
    MapView.jsx
    Timeline.jsx
  data/
    historicalData.js
    territories.js
```

## Environment variables

No map API key is required for the current CARTO raster tile URL. Do not commit `.env.local`, API keys, access tokens, or other secrets.

## Notes

- Years use astronomical-style signed integers for the UI: 322 BCE is `-322`; 1 CE is `1`. There is no year zero in the displayed historical calendar; the slider crosses from negative to positive values directly.
- Historical records currently contain a curated starter set, not an exhaustive catalogue.
