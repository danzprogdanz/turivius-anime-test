import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AnimeSearchProvider } from './context/AnimeSearchProvider.tsx'
import { AnimeCategoryProvider } from './context/AnimeCategoryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimeSearchProvider>
      <AnimeCategoryProvider>
        <App />
      </AnimeCategoryProvider>
    </AnimeSearchProvider>
  </StrictMode>,
)
