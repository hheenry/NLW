import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

// Importar o Global.CSS do Tailwind  
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
