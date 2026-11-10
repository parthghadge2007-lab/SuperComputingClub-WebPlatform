#!/bin/sh

if [ -n "$DATABASE_URL" ] && [ "$DATABASE_URL" != "mysql://placeholder:placeholder@localhost:3306/placeholder" ]; then
  echo "Applying database migrations..."
  npx prisma migrate deploy || echo "Warning: Migration failed, continuing boot..."
else
  echo "Placeholder or no DATABASE_URL configured. Skipping migrations."
fi

echo "Starting NestJS application..."
exec node dist/main.js
