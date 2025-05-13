import { NavLink } from "react-router-dom";
import lightImage from "../../assets/light.svg"
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GeneralContext, GeneralContextAction } from "../context/GeneralContext";

function Navbar() {
    const { t } = useTranslation();

    const Generalcontext=useContext(GeneralContext);

    if(!Generalcontext){
        return;
    }

    const navLinkClass=({isActive}: {isActive: boolean})=>{
        return `${isActive && 'text-blue-600'}`
    };    

    return (
        <div className="flex flex-row justify-between items-center p-5 shadow-md">
            <h1 className="text-3xl font-extrabold font-[Tagesschrift]">{t('logo')}</h1>
            <nav>
                <ul className="flex flex-row gap-5 text-lg">
                    <li>
                        <NavLink className={navLinkClass} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={navLinkClass} to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={navLinkClass} to='/todos'>Todos</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row items-center gap-5">
                <button onClick={()=>{
                    Generalcontext.dispatch({type: GeneralContextAction.TOGGLETHEME});
                }} className="flex justify-center items-center w-10 h-10 border-2 border-black rounded-md hover:opacity-70 active:op"><img className="h-7 w-7" src={lightImage} alt="light mode" /></button>
                <LanguageSelector/>
            </div>
        </div>
    );
}

export default Navbar;