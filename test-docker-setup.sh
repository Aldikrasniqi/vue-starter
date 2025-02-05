#!/bin/bash

echo "Testing Docker Development Setup..."
docker compose up -d
sleep 10  # Wait for the development server to start

# Test development server
curl -f http://localhost:5173 || { echo "Development server test failed"; exit 1; }
echo "Development server test passed"

# Stop development container
docker compose down

echo "Testing Production Build..."
docker build -t vue-starter .
docker run -d -p 80:80 --name vue-prod vue-starter
sleep 5  # Wait for the production server to start

# Test production server
curl -f http://localhost || { echo "Production server test failed"; exit 1; }
echo "Production server test passed"

# Cleanup
docker stop vue-prod
docker rm vue-prod

echo "Testing Unit Tests in Docker..."
docker compose run --rm app npm run test:unit -- --run

echo "All tests completed!"
