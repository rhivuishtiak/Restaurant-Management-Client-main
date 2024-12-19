import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Authprovider from './provider/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>
  <HelmetProvider>
  <RouterProvider router={router} />

  </HelmetProvider>
 </Authprovider>
  </React.StrictMode>,
)
