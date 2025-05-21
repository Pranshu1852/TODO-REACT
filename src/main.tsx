import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import './lib/i18n.ts';
import { NavigationBridgeComponent } from './components/NavigationBridge.tsx';
import ContextWrapper from './wrapper/ContexWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ContextWrapper>
        <BrowserRouter>
        <NavigationBridgeComponent />
          <App />
        </BrowserRouter>
      </ContextWrapper>
  </StrictMode>
);
