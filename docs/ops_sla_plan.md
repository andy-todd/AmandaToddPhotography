# Ops & SLA Plan

## Hosting & Infra
- Frontend: CloudFront/S3
- Backend: ECS/Fargate or EC2
- DB: PostgreSQL (managed)

## Backups
- DB dump nightly → S3 (retain 30 days)
- Sanity dataset export nightly
- Asset bucket versioning enabled

## Monitoring
- Uptime checks (home, checkout, webhook)
- Log aggregation (CloudWatch)

## Incident Response
- Severity levels & response times:
  - Sev1 (checkout down): respond <1h, fix/rollback <4h
  - Sev2 (non-critical flow): respond <4h, fix <24h
  - Sev3 (minor): batch into weekly release

## Maintenance
- Patching cadence: monthly
- Dependency updates: monthly with changelog

## Support
- Hours: [AEST business hours]
- Channel: [Email/Slack/Ticketing]
- Inclusions: minor content tweaks, small fixes (<1h)
- Exclusions: new features, redesign
