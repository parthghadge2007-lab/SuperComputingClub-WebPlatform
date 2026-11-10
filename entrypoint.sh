#!/bin/sh
# Wait for DB to be ready (optional). You can install wait-on if desired.
# npx wait-on "$DATABASE_URL"
# Run Prisma migrations
npx prisma migrate deploy
# Start the NestJS app
node dist/main.js

