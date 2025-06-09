import { lazy, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import ErrorFallBack from './components/ErrorFallback';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import AddEditTodo from './features/Todos/pages/AddEditTodo';
import TodoDetailPage from './features/Todos/pages/TodoDetailPage';
import TodoLayout from './features/Todos/TodoLayout';
import MainLayout from './layouts/MainLayout';
import { storeSelector } from './store/store';
import { sharedRef } from './utils/sharedRef';

const TodosPage = lazy(() => import('./features/Todos/pages/TodosPage'));

function App() {
  const { i18n } = useTranslation();

  const { language, theme } = useSelector(storeSelector);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language, language]);

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallBack}
      onReset={() => {
        if (sharedRef.current) {
          sharedRef.current.navigate('/');
        }
      }}
    >
      <div
        className={`flex flex-col min-h-[100vh] font-[Montserrat] ${theme === 'light' ? 'bg-white text-black' : 'bg-[#333] text-white'}`}
      >
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<h2>Home</h2>} />
            <Route path='/addtodo' element={<AddEditTodo />} />
            <Route path='/edittodo/:id' element={<AddEditTodo />} />
            <Route path='/todos' element={<TodoLayout />}>
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <TodosPage />
                  </Suspense>
                }
              />
              <Route path='/todos/:id' element={<TodoDetailPage />} />
            </Route>

            <Route path='/about' element={<h2>About</h2>} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
