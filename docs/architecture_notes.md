# Architecture Notes

## Data Flow (TL;DR)
- Frontend (Next.js) consumes:
  - CMS (Sanity) for content & product meta
  - Commerce backend (Medusa/Vendure) for catalog, pricing, orders
- Checkout handled by Stripe
- Webhooks (payment success) update order state; digital deliveries trigger S3 link emails; physical orders call fulfillment API.

## Environments
- Dev: feature work, fake payments
- Staging: client review, Stripe test keys
- Production: live

## Decisions (keep a running list)
- Chosen ecommerce engine:
- Image hosting strategy:
- Caching policy:
- Search approach:
