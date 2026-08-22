/*
  src/main.tsx
  Browser entry point. Hydrates the markup that scripts/prerender-routes.mjs baked into each page,
  and falls back to a fresh client render in dev, where index.html still ships an empty root div.
*/
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
