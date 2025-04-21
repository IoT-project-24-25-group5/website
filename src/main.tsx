import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import Dashboard from "./Dashboard.tsx";
import store from "./state/store.ts";
import './websocket_setup.ts';
import "leaflet/dist/leaflet.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </StrictMode>,
)



