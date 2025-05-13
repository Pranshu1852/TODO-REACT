import lightImage from "../../assets/light.svg";
import darkImage from "../../assets/moon.svg";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import {
  GeneralContext,
  GeneralContextAction,
} from "../context/GeneralContext";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";

function Navbar() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const generalContext = useContext(GeneralContext);

  if (!generalContext) {
    return;
  }

  const { state } = generalContext;

  return (
    <div className="flex flex-row justify-between items-center p-5 shadow-md">
      <div className="flex flex-row gap-3 items-center">
        <div className="sm:hidden">
          <button onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <nav>
              <ul className="flex flex-col items-center p-5 mt-10 gap-5 text-xl w-[50vw]">
                <NavLinks />
              </ul>
            </nav>
          </Drawer>
        </div>
        <h1 className="text-3xl font-extrabold font-[Tagesschrift]">
          {t("logo")}
        </h1>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex flex-row gap-5 text-lg">
          <NavLinks />
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-5">
        <button
          onClick={() => {
            generalContext.dispatch({ type: GeneralContextAction.TOGGLETHEME });
          }}
          className="flex justify-center items-center w-10 h-10 border-2 border-black rounded-md hover:opacity-70 active:op"
        >
          <img
            className="h-7 w-7"
            src={state.themeMode === "light" ? lightImage : darkImage}
            alt="light mode"
          />
        </button>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Navbar;
