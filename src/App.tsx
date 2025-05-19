import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import GeneralContext from './context/GeneralContext';
import AddTodoPage from './features/Todos/pages/AddTodoPage';
import TodoDetailPage from './features/Todos/pages/TodoDetailPage';
import TodosPage from './features/Todos/pages/TodosPage';
import TodoLayout from './features/Todos/TodoLayout';

function App() {
  const { i18n } = useTranslation();

  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    if (generalContext) {
      i18n.changeLanguage(generalContext.state.language);
    }
  });

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  if (!generalContext) {
    return;
  }

  const { state } = generalContext;

  return (
    <div
      className={`flex flex-col min-h-[100vh] font-[Montserrat] ${state.themeMode === 'light' ? 'bg-white text-black' : 'bg-[#333] text-white'}`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/addtodo" element={<AddTodoPage />} />
        <Route path="/todos" element={<TodoLayout />}>
          <Route index element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
        </Route>
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </div>
  );
}

export default App;
