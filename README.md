# Vue 3 template

This template should help get you started developing with Vue 3 in Vite with the following dependencies and configurations:

## Technologies Used

- **Vue.js**: ^3.5.13
- **Vite**: ^5.4.11
- **Pinia**: ^2.2.6
- **Cypress**: ^13.16.0
- **Vitest**: ^2.1.5
- **Tailwind CSS**: ^3.4.17
- **TypeScript**: ~5.6.3
- **Docker**: For containerization and deployment

## Software Design Patterns

- **Composition API**: Utilized in Vue components for better organization and reusability.
- **Store Pattern**: Using Pinia for state management, promoting a centralized state management approach.

## Style Guide

- **ESLint**: Configured with rules for consistent code style.
- **Prettier**: Used for code formatting, ensuring a uniform code style across the project.
- **Tailwind CSS**: Utility-first CSS framework for styling components.

## Reusable Components

- **NavigationBar**: A reusable navigation component that can be used across different views.
- **WrapedButton**: A button component that can be reused with different titles and click actions.

## Dependencies

### Cross-Functional Team Dependencies

- **Cypress**: For end-to-end testing.
- **Vitest**: For unit testing.
- **Pinia**: For state management.
- **Tailwind CSS**: For styling components.

## Project Setup

You can run this project either locally using Node.js or with Docker.

### Local Development Setup

```sh
npm install
```

### Docker Development Setup

```sh
# Start the development server using Docker
docker compose up

# Start in detached mode
docker compose up -d
```

The application will be available at http://localhost:5173

## Development

### Local Development

```sh
npm run dev
```

### Docker Development

```sh
docker compose up
```

## Production

### Local Production Build

```sh
npm run build
```

### Docker Production Build

```sh
# Build the production image
docker build -t vue-starter .

# Run the production container
docker run -p 80:80 vue-starter
```

The production application will be available at http://localhost

## Testing

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
# Local
npm run test:unit

# Using Docker
docker compose run --rm app npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
# Development tests locally
npm run test:e2e:dev

# Production tests locally
npm run build
npm run test:e2e

# Using Docker
docker compose run --rm app npm run test:e2e:dev
```

### Test Docker Setup

The repository includes a test script to verify the Docker setup:

```sh
# Make the script executable
chmod +x test-docker-setup.sh

# Run the test script
./test-docker-setup.sh
```

The test script will:

1. Test the development environment setup
2. Test the production build and deployment
3. Run unit tests in Docker
4. Clean up containers after testing

Prerequisites for running the test script:

- Docker installed and running
- Ports 5173 and 80 available
- curl installed (for HTTP testing)

If any step fails, the script will exit with an error message indicating which test failed.

## Docker Commands Reference

```sh
# Build and start development environment
docker compose up

# Stop development environment
docker compose down

# Rebuild development environment
docker compose up --build

# Run commands in development container
docker compose run --rm app npm install <package-name>

# Build production image
docker build -t vue-starter .

# Run production container
docker run -p 80:80 vue-starter
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments).

# Vue Starter

![CI](https://github.com/{username}/{repo}/actions/workflows/ci.yml/badge.svg?branch=workflow-setup)
![Docker](https://github.com/{username}/{repo}/actions/workflows/docker.yml/badge.svg?branch=workflow-setup)
