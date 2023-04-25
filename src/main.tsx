import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@/styles/tailwindcss.css'

AOS.init()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
