import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <App />
  </React.StrictMode>,
)
