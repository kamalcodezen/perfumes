# RossWell

AI-powered luxury perfume e-commerce and catalog platform that unifies signature collections, advanced filtering, dynamic product details, performance analytics charts, and user/admin workflow controls.

## 1. Project Title & Tagline

RossWell: a full-stack premium fragrance e-commerce suite built with a React frontend and an Express backend.

## 2. Problem Statement

The digital perfume shopping experience is usually fragmented across standard interfaces lacking luxury aesthetics, unified interactive animations, fast search-to-filter capabilities, and detailed scent profile diagnostics. This weakens consumer engagement and buying decisions.
RossWell targets fragrance enthusiasts and administrators by providing one platform for:

- Discovery (Artisan collection + signature showcases)
- Customization (Dynamic theme-switching UI + quantitative controls)
- Management (Admin product management + user analytics dashboards)

## 3. Solution

RossWell combines a highly animated, responsive frontend interface with an asynchronous API route pipeline backed by MongoDB and modern session management via Better-Auth.
At a high level:

- Users authenticate via credentials or session tokens through `Better-Auth`.
- The frontend tracks auth states dynamically to render secure routing structures.
- Product pipelines ingest raw MongoDB entities to feed the dynamic catalog.
- Global animation engines (`AOS`) eliminate interface rigidness across view layers.
- Charting extensions (`Recharts`) process transactional or system metrics natively on dashboards.

## 4. Key Features

- High-fidelity product gallery with premium hardware-accelerated scroll animations.
- Fixed floating capsule navigation architecture tailored dynamically for desktop and mobile displays.
- Dynamic theme management (`UseTheme`) delivering persistence across viewport contexts.
- Asynchronous data fetching architecture rendering granular scent profile accord breakdowns.
- Fluid user quantitative selectors automatically updating total calculation fields.
- Interactive analytics data visualization rendered as performance charts via `Recharts`.
- Strict administrative control boundaries ensuring protected data mutations (Add/Delete entries).
- Custom global application error handling system using typed error boundaries.
- Native database integration handling inventory artifacts flawlessly under scalable data rules.
- Complete 60fps scrolling optimization preventing UI layout reflows across structural sections.

## 5. Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, React Router DOM (v7), HeroUI, Lucide React, Swiper.js.
- **Backend:** Node.js, Express.js (v5.1.0 Engine Core), TypeScript, TSX Watch runtime.
- **Datastores:**
  - MongoDB via Native MongoDB Driver for core product inventory, user identities, and session persistence.
- **Analytics:** Recharts for active user metrics and transactional system visualization.
- **Auth:** Better-Auth (Credentials and persistent session engine management).
- **Animations:** AOS (Animate On Scroll), Framer Motion.

## 6. System Architecture

- High-Level System
- Backend Component View
- Client Component Architecture
- Data Flow Layer

## 7. Core Pipelines

- **Catalog & Details Pipeline:**
  - Product inquiry requested via custom dynamic routes.
  - Data ingestion managed through `/api/perfumes/:id` API boundaries.
  - Scent arrays validated and processed natively before rendering to the client interface.
  - Viewport initialization launches custom structural entrance animations.
- **Authentication & Route Guarding Flow:**
  - Sessions verified securely inside frontend and backend context bridges.
  - State conditions dictate structural links shown (`Navbar` routes adapt dynamically).
  - Protected views check user roles before allowing entry to dashboard outlets.
- **Inventory Management Pipeline:**
  - Administrators execute write operations via protected component views.
  - Data payloads pass directly into the backend MongoDB transaction layers.
  - Dynamic re-fetching scripts execute automatically to update current catalog states.

## 8. Project Structure
```
├── backend/ # Server-side TypeScript architecture
│ ├── src/
│ │ ├── modules/ # Business logic systems
│ │ ├── auth.ts # Better-Auth initialization
│ │ ├── db.ts # Native MongoDB anchor
│ │ └── index.ts # Main API engine launch script
│ ├── package.json
│ └── tsconfig.json
│
├── src/ # Client-side React TypeScript application
│ ├── components/ # UI elements (about, contact, common, home, dashboard)
│ ├── hooks/ # Custom state hooks (UseTheme)
│ ├── layout/ # Structural route shells (AuthLayout, DashboardLayout, RootLayout)
│ ├── lib/ # Core API definitions and session modules
│ ├── pages/ # Application page layouts (Home, Perfumes, Error)
│ ├── types/ # Strict TypeScript declaration types
│ ├── main.tsx # Client mount point
│ └── index.css # Tailwind style engine targets
├── package.json
└── tsconfig.json
```
## 9. How the System Works

- User authenticates via the Better-Auth UI platform layout.
- Active system profile states load securely into the unified component tree context.
- User accesses premium boutique tools (Dynamic catalog exploration, wishlist tracking, checkout counters).
- Admin workflows process system updates directly modifying backend database records.
- Production UI layout modules maintain precise 3-color theme configurations for visual consistency.
- Bundled application builds optimize bundle delivery metrics dynamically during hosting.
