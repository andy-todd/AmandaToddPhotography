# Backup Playbook

## DB Backups
- Nightly `pg_dump` → S3 `s3://[project]-db-backups/YYYY/MM/DD.sql.gz`
- Retention: 30 days
- Test restore monthly

## CMS Exports
- Nightly `sanity dataset export` → S3 `s3://[project]-cms-backups/DATE.ndjson.gz`
- Verify file size > 0 and valid gzip

## Asset Storage
- S3 bucket versioning ON
- Lifecycle policy: move to IA after 30 days
