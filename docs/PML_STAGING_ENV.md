# PML Website - Staging Environment Guide

## Services

PML staging consists of:

- Frontend Web: Next.js
- Backend API/CMS: NestJS
- Database: PostgreSQL
- Cache: Redis
- Upload Storage: local volume for staging, S3/object storage recommended for production
- Email Notification: external email API from vendor/client side

## Frontend Environment

Required environment variable for the web app:

NEXT_PUBLIC_API_URL=https://<api-staging-domain>/api

Local example:

NEXT_PUBLIC_API_URL=http://localhost:4000/api

## API Environment

Required environment variables for the NestJS API:

PORT=4000
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
CORS_ORIGIN="https://<web-staging-domain>,http://localhost:3000"
REDIS_URL="redis://HOST:6379"
JWT_SECRET="<strong-random-jwt-secret>"
JWT_EXPIRES_IN="7d"
ADMIN_SEED_PASSWORD="<strong-admin-password>"

## API Docker Build

Build API image:

docker build -f Dockerfile.api -t pml-api:staging .

Run database migration:

docker run --rm -e DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public" pml-api:staging npx prisma migrate deploy

Run seed:

docker run --rm -e DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public" -e ADMIN_SEED_PASSWORD="<strong-admin-password>" pml-api:staging npm run db:seed

Run API container:

docker run -d --name pml-api -p 4000:4000 -e PORT=4000 -e DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public" -e CORS_ORIGIN="https://<web-staging-domain>" -e REDIS_URL="redis://HOST:6379" -e JWT_SECRET="<strong-random-jwt-secret>" -e JWT_EXPIRES_IN="7d" -e ADMIN_SEED_PASSWORD="<strong-admin-password>" pml-api:staging

## Health Check

curl https://<api-staging-domain>/api/health

Expected response:

{
  "status": "ok",
  "service": "pml-cms-api",
  "checks": {
    "api": "ok",
    "database": "ok",
    "redis": "ok"
  }
}

## Default Admin

Default admin email:

admin@pharmametriclabs.com

Password is taken from:

ADMIN_SEED_PASSWORD

## CMS Test Checklist

After web and API staging are connected, test:

- Admin login
- Settings
- Page SEO
- Insights create/edit/archive
- Catalogues create/edit/archive
- Catalogue file upload
- Media upload/edit/delete
- Popups create/edit/archive
- Homepage features create/edit/archive
- Inquiries/proposals list and status update

## Storage Notes

For staging, uploaded files can be stored in the API server path:

public/uploads

For production/AWS, object storage such as S3 is recommended.

## Security Notes

- Do not use production database for staging.
- Do not use default JWT secret.
- Use strong ADMIN_SEED_PASSWORD.
- Restrict CORS_ORIGIN to staging/production web domains only.
- Use WAF/reverse proxy in AWS production or staging environment.
