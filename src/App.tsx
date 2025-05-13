import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { GeneralContext } from "./components/context/GeneralContext";

function App() {
  const { i18n } = useTranslation();

  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    if(generalContext){
      i18n.changeLanguage(generalContext.state.language);
    }
  }, []);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
