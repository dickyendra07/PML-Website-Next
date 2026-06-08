# Pharma Metric Labs CMS — Production Readiness Checklist

_Last updated: June 2026_

## Current CMS Status

The Pharma Metric Labs website CMS currently includes:

- Admin Authentication
- Inquiry / Proposal Management
- Site Settings
- Page SEO Management
- Popup / Announcement CMS
- Catalogue CMS
- Catalogue Request Management
- Insight CMS
- Homepage Features CMS
- Media Library CMS
- CMS Dashboard Command Center

Current frontend production preview:

https://pml-website-labs.vercel.app

Current backend local API:

http://localhost:4000/api

## Completed CMS Modules

### Admin Authentication

Status: Complete.

Endpoints:

- POST /api/admin/auth/login
- GET /api/admin/auth/me
- POST /api/admin/auth/refresh
- POST /api/admin/auth/logout

### Inquiries / Proposal Management

Status: Complete.

Endpoints:

- POST /api/proposals
- GET /api/admin/proposals
- GET /api/admin/proposals/:id
- PATCH /api/admin/proposals/:id/status
- PATCH /api/admin/proposals/:id/internal-note
- PATCH /api/admin/proposals/:id/spam

Pending:

- Email notification for new inquiry submission.

### Site Settings

Status: Complete.

Endpoints:

- GET /api/settings/public
- GET /api/admin/settings
- PATCH /api/admin/settings
- POST /api/admin/settings/seed-defaults

### Page SEO CMS

Status: Complete.

Endpoints:

- GET /api/page-seo?path=/
- GET /api/admin/page-seo
- PATCH /api/admin/page-seo/:id
- POST /api/admin/page-seo/seed-defaults

### Popup / Announcement CMS

Status: Complete.

Features:

- Popup title, description, button, image
- Layout selection
- Frequency selection
- Start/end schedule
- Priority
- Placement pages
- Draft/published/archive status

### Catalogue CMS

Status: Complete.

Features:

- Catalogue title, slug, description
- Service type
- Cover image
- PDF file
- Public download or request-required mode
- Request tracking

Pending:

- Email notification for catalogue request.

### Insight CMS

Status: Complete.

Features:

- Articles
- News
- Publications
- FAQ content
- Cover image
- Tags
- Featured flag
- Published date
- Draft/published/archive status

### Homepage Features CMS

Status: Complete.

Notes:

- Admin CMS is active.
- Public homepage display is currently hidden because it is not needed yet.

### Media Library CMS

Status: Complete.

Features:

- Upload image, PDF, document, or video
- Preview image assets
- Copy media URL
- Edit alt text
- Edit caption
- Edit folder
- Edit media type
- Delete media library record

Note:

- Current delete removes the database record only.
- Physical file deletion should be implemented after production storage strategy is decided.

### CMS Dashboard

Status: Complete.

Dashboard includes:

- Inquiry summary cards
- CMS module shortcuts
- Quick link to Media Library
- Recent website inquiries table

## Route QA Result

Public routes tested locally:

- GET /api/health ✅
- GET /api/settings/public ✅
- GET /api/page-seo?path=/ ✅
- GET /api/popups/active?path=/ ✅
- GET /api/catalogues ✅
- GET /api/insights ✅
- GET /api/homepage-features ✅

Admin routes tested locally:

- GET /api/admin/auth/me ✅
- GET /api/admin/proposals ✅
- GET /api/admin/settings ✅
- GET /api/admin/page-seo ✅
- GET /api/admin/popups ✅
- GET /api/admin/catalogues ✅
- GET /api/admin/catalogues/requests ✅
- GET /api/admin/insights ✅
- GET /api/admin/homepage-features ✅
- GET /api/admin/media ✅

## Required Production Environment Variables

Backend API:

NODE_ENV=production
PORT=4000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
REDIS_URL=redis://HOST:PORT
JWT_SECRET=replace-with-secure-production-secret
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://pml-website-labs.vercel.app,https://pharmametriclabs.com
APP_URL=https://api.pharmametriclabs.com

Frontend Vercel:

NEXT_PUBLIC_API_URL=https://api.pharmametriclabs.com/api

Important:

- Do not use localhost in final production Vercel environment.
- Replace with the deployed backend API URL before final go-live.

## Backend Deployment Checklist

Before deploying backend:

- Prepare production PostgreSQL database.
- Prepare production Redis.
- Configure production environment variables.
- Confirm upload storage strategy.
- Confirm CORS origin.
- Confirm secure JWT secret.
- Run API build.
- Run Prisma migration.
- Run seed scripts carefully.

Commands:

npm run build
npx prisma generate
npx prisma migrate deploy

## Seed Files

Available seed files:

- prisma/seed.ts
- prisma/seed-page-seo.ts
- prisma/seed-popup.ts
- prisma/seed-catalogues.ts
- prisma/seed-insights.ts
- prisma/seed-homepage-features.ts

Recommended production seed order:

npx ts-node prisma/seed.ts
npx ts-node prisma/seed-page-seo.ts
npx ts-node prisma/seed-popup.ts
npx ts-node prisma/seed-catalogues.ts
npx ts-node prisma/seed-insights.ts
npx ts-node prisma/seed-homepage-features.ts

## Upload / Storage Notes

Current upload paths:

- apps/api/public/uploads/popups
- apps/api/public/uploads/catalogues
- apps/api/public/uploads/homepage-features
- apps/api/public/uploads/media

Important:

If backend is deployed on a platform with ephemeral filesystem, uploaded files may disappear after redeploy.

Recommended options:

- VPS with persistent storage
- Object storage / S3-compatible storage
- Cloudinary or similar media storage

## Known Pending Items

Pending items:

- Email notification service
- Physical file deletion from storage
- Production backend deployment
- Production PostgreSQL setup
- Production Redis setup
- Final domain setup
- Final full QA on production environment

## Final Recommendation

The CMS core is ready for local development and internal preview.

Recommended next stage:

Production backend deployment preparation.

Do not finalize production handover until:

- Backend API is deployed online.
- Production PostgreSQL is connected.
- Production Redis is connected.
- Upload storage strategy is confirmed.
- Vercel frontend uses production API URL.
- Full QA is repeated against production environment.
