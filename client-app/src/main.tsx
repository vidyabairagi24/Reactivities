import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import { store, StoreContext } from './app/stores/store'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>,
)
