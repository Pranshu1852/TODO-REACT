import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { GeneralContext } from "./components/context/GeneralContext";
import TodoLayout from "./components/Todos/TodoLayout";
import TodosPage from "./components/Todos/TodosPage";
import TodoDetailPage from "./components/Todos/TodoDetailPage";

function App() {
  const { i18n } = useTranslation();

  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    if (generalContext) {
      i18n.changeLanguage(generalContext.state.language);
    }
  }, []);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="flex flex-col min-h-[100vh] bg-[#faebd7]">
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/todos" element={<TodoLayout />}>
          <Route index element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
