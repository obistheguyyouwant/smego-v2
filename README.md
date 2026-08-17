# SME.GO V2 - Modern AI-Powered Marketplace

A modern, global marketplace platform redesigned for SMEs with AI-powered features including:

- **AI Shopping Assistant** — Natural language product search with intelligent recommendations
- **AI Studio for Sellers** — Tools to optimize product listings, photos, and content
- **Stock Management** — AI-powered inventory tracking with predictive stockout alerts
- **Business Insights** — Analytics dashboard with AI-generated summaries and trend analysis

## Project Structure

```
site/
├── index.html          # Main HTML entry point
├── css/
│   └── styles.css      # Design system and component styles
└── js/
    └── app.js          # Application logic and state management
```

## Design System

- **Typography**: Anuphan (Thai/Latin), Space Grotesk (numerics)
- **Color Palette**: Brand Blue (#2E6BFF), Emerald, Amber accents
- **Icons**: Lucide icon library
- **Layout**: Responsive grid system, mobile-first approach

## Local Development

```bash
cd site
python3 -m http.server 5174
```

Visit `http://localhost:5174` in your browser.

## AI Features

- **AI Shopping Assistant**: Searches products by natural language queries with keyword matching
- **AI Content Generator**: Creates product titles, captions, and descriptions
- **Stock Predictions**: Forecasts stockout dates based on sales velocity
- **AI Analytics**: Generates business insights and recommendations

## Deployment

Deployed on Vercel with automatic deployments on push to main branch.

## License

Private project
