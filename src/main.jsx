import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-outqh87xcg0bt078.us.auth0.com"
    clientId="D56KXjia8IJAb0sW2JN8wFOziV3qpkSy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  </Auth0Provider>
)
