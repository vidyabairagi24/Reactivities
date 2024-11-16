import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App'
import { store, StoreContext } from './app/stores/store'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
)
