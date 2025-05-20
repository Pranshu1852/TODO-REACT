import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import './lib/i18n.ts';
import ErrorFallBack from './components/ErrorFallback.tsx';
import ContextWrapper from './wrapper/ContexWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallbackRender={ErrorFallBack}
      onReset={() => {
        window.location.href = '/';
      }}
    >
      <ContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextWrapper>
    </ErrorBoundary>
  </StrictMode>
);
