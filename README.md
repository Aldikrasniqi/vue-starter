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

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
