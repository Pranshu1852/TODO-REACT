import { NavLink } from 'react-router-dom';

interface OptionType {
  label: string;
  path: string;
}

interface NavLinksProps {
  options: Array<OptionType>;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) => {
  return `${isActive && 'text-blue-600'}`;
};

function NavLinks({ options }: NavLinksProps) {
  return (
    <>
      {options.map((option, index) => (
        <li key={index}>
          <NavLink className={navLinkClass} to={option.path}>
            {option.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
