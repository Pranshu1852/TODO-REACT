import {
  useContext,
  useEffect,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

import ErrorFallBack from './components/ErrorFallback';
import NotFound from './components/NotFound';
import GeneralContext from './context/GeneralContext';
import AddEditTodo from './features/Todos/pages/AddEditTodo';
import TodoDetailPage from './features/Todos/pages/TodoDetailPage';
import TodosPage from './features/Todos/pages/TodosPage';
import TodoLayout from './features/Todos/TodoLayout';
import MainLayout from './layouts/MainLayout';
import { sharedRef } from './utils/sharedRef';

function App() {
  const { i18n } = useTranslation();

  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    if (generalContext) {
      i18n.changeLanguage(generalContext.state.language);
    }
  }, [i18n, generalContext]);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  if (!generalContext) {
    return;
  }

  const { state } = generalContext;

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallBack}
      onReset={() => {
        if(sharedRef.current){
          sharedRef.current.navigate('/');
        }
      }}
    >
      <div
        className={`flex flex-col min-h-[100vh] font-[Montserrat] ${state.themeMode === 'light' ? 'bg-white text-black' : 'bg-[#333] text-white'}`}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<h2>Home</h2>} />
            <Route path="/addtodo" element={<AddEditTodo />} />
            <Route path="/edittodo/:id" element={<AddEditTodo />} />
            <Route path="/todos" element={<TodoLayout />}>
              <Route index element={<TodosPage />} />
              <Route path="/todos/:id" element={<TodoDetailPage />} />
            </Route>

            <Route path="/about" element={<h2>About</h2>} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
