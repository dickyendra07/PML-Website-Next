FROM node:22-alpine AS base

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1


FROM base AS deps

RUN apk add --no-cache libc6-compat

COPY apps/web/package*.json ./
RUN npm ci --ignore-scripts


FROM base AS builder

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

COPY --from=deps /app/node_modules ./node_modules
COPY apps/web ./

RUN test -n "$NEXT_PUBLIC_API_URL" \
  || (echo "NEXT_PUBLIC_API_URL build argument is required" && exit 1) \
  && npm run build


FROM node:22-alpine AS runner

WORKDIR /app

LABEL maintainer="PML Development Team"
LABEL description="PML Website frontend application"

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["wget", "-q", "--spider", "http://127.0.0.1:3000/"]

CMD ["node", "server.js"]
