import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";

import App from './App.tsx';
import './index.css';
import './lib/i18n.ts';
import ContextWrapper from './wrapper/ContexWrapper.tsx';


function ErrorFallback({error, resetErrorBoundary}: {error: string, resetErrorBoundary: () => void}) {
  return (
    <div className='flex flex-col gap-10 items-center justify-center m-auto h-[100vh] w-full'>
      <h2 className='text-6xl text-center'>Error: <span className='text-red-600'>{error}</span></h2>
      <button className='py-5 px-10 bg-slate-400 text-2xl font-bold text-white rounded-xl' onClick={resetErrorBoundary}>Go Home</button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback} onReset={()=>{
      window.location.href='/'
    }}>
      <ContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextWrapper>
    </ErrorBoundary>
  </StrictMode>
);
