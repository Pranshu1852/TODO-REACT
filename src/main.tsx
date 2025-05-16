import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './lib/i18n.ts';
import App from './App.tsx';
import { GeneralContextProvider } from './context/GeneralContext.tsx';
import { TodoContextProvider } from './features/Todos/context/TodoContext.tsx';

function ContextWrapper({ children }: { children: ReactNode }) {
  return (
    <GeneralContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </GeneralContextProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextWrapper>
  </StrictMode>
);
