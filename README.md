# BuildKo

## Overview
BuildKo is a modern construction company website designed to showcase project portfolios, service offerings, and facilitate customer engagement. The platform is optimized for performance, scalability, and seamless user experience.

## Tech Stack
### Frontend
- **TypeScript** 5.x
- **React** 18.x (TSX)
- **Vite** 5.x (Bundler)
- **React Router** (Routing)
- **React Query** (State Management & Data Caching)

### Styling & UI
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **shadcn/ui** (Prebuilt UI Components)
- **react-intersection-observer** (Scroll-triggered animations)

### Media Handling
- **react-image-gallery** (Project Galleries)
- **sharp** (Image Optimization)
- **react-compare-image** (Before/After Comparisons)

### Forms & Validation
- **React Hook Form** (Form Management)
- **Zod** (Data Validation)
- **react-pdf** (PDF Generation)

### CMS & Content
- **Strapi** (Headless CMS)
- **MDX** (Rich Content Management)
- **react-markdown** (Markdown Rendering)

### Performance Optimization
- **React Suspense & Lazy Loading** (Code Splitting)
- **Lighthouse CI** (Performance Monitoring)
- **react-virtual** (Virtualized Lists)

### Testing
- **Vitest** (Unit Testing)
- **React Testing Library** (Component Testing)
- **Cypress** (E2E Testing)
- **MSW** (API Mocking)

### DevOps & Deployment
- **Docker** (Containerization)
- **GitHub Actions** (CI/CD Automation)
- **Vercel / Netlify** (Hosting)

## Roadmap
### Phase 1: Discovery & Planning (Feb 15 - Mar 14, 2025)
- Market research & competitor analysis
- Stakeholder interviews & workflow analysis
- Content strategy & technical requirements gathering

### Phase 2: Design (Mar 15 - Apr 24, 2025)
- Brand integration & UI design
- Homepage, portfolio, and service page layouts
- Quote request system & motion design

### Phase 3: Development (Apr 25 - Jun 20, 2025)
- Frontend development & CMS implementation
- Project showcase & quote calculator integration

### Phase 4: Content & Media (Jun 1 - Jul 14, 2025)
- Project portfolio & service descriptions
- Blog & team bios creation

### Phase 5: Testing & Launch (Jul 1 - Aug 1, 2025)
- Quality assurance & performance testing
- Hosting & monitoring setup

### Phase 6: Post-Launch (Aug 1 - Ongoing)
- Performance monitoring & content updates
- SEO & marketing automation

## Installation
### Prerequisites
- **Node.js** v18+
- **Yarn** or **npm**
- **Docker** (for containerization)

### Setup
```bash
# Clone the repository
git clone https://github.com/your-org/buildko.git
cd buildko

# Install dependencies
yarn install  # or npm install

# Start the development server
yarn dev  # or npm run dev
```

### Deployment
- **Vercel Deployment:**
```bash
vercel --prod
```
- **Netlify Deployment:**
```bash
netlify deploy --prod
```

## Contributing
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit changes and push
4. Create a pull request

## License
This project is licensed under the MIT License.

