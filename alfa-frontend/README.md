# React + Vite

## Production SEO URL

Set `VITE_SITE_URL` to the public site origin when building (for example, in the deployment environment or Docker build arguments). The frontend uses it for canonical and social URLs, JSON-LD, `robots.txt`, and `sitemap.xml`. If it is omitted, local builds use `http://localhost:5173`; do not deploy that fallback.

The site is a client-rendered React application. Route metadata and product schema are added after JavaScript runs. Search engines that render JavaScript can process those updates; social crawlers that only read the initial HTML will see the homepage fallback metadata. Full per-route metadata in the initial response requires prerendering or server rendering with the product API available.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
