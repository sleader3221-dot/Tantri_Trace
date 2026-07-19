# TantriTrace Submission

TantriTrace is a working handloom authenticity system for Theme 2.2, Digital Authenticity and Weaver Stories. It proves a handloom product with a cryptographic certificate, links the item to the named weaver, records scans in a tamper-evident ledger, and turns each QR-style scan into a buyer-facing story and impact receipt.

## Run

```bash
npm run serve:prototype
```

Open:

```text
http://127.0.0.1:8790/tantritrace-ultimate/
```

## What Works

- Product and weaver registration with validation.
- SHA-256 product certificates and tamper-evident ledger blocks.
- Live Node API persistence with Server-Sent Events.
- Public consumer certificate view with share link, receipt export, read-aloud story, and craft context.
- Retailer batch scanning with risk scoring and fraud queue.
- Manual verification by product ID, certificate ID, or trace hash.
- Ledger integrity re-verification.
- Cluster, income, scan, craft, and risk analytics.
- Offline local fallback plus PWA asset caching.
- JSON export for cooperative, government, or marketplace integration.

## API Surface

```text
GET  /api/health
GET  /api/state
PUT  /api/state
GET  /api/events
POST /api/scan
POST /api/verify
POST /api/products
GET  /api/products/{id}/certificate
POST /api/weavers
GET  /api/ledger/verify
POST /api/fraud/report
POST /api/reset
```

## Default Demo Product

Use `TT-PCH-001` in the Verify screen to show an authentic scan. Use any unknown value to show fraud detection.
