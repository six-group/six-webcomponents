import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// css
import '@six-group/ui-library/dist/ui-library/ui-library.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
