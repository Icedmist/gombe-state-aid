#!/bin/bash
echo "Waiting for node_modules to finish installing..."
while [ ! -d "node_modules/next" ]; do
  sleep 5
done
echo "Node modules detected. Running prisma generate..."
npx prisma generate
echo "Starting Next.js development server..."
npm run dev
