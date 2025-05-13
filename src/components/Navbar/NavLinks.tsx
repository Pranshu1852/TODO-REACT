import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) => {
  return `${isActive && "text-blue-600"}`;
};

function NavLinks() {
  const { t } = useTranslation();

  return (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          {t("Home")}
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/about">
          {t("About")}
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/todos">
          {t("Todos")}
        </NavLink>
      </li>
    </>
  );
}

export default NavLinks;
