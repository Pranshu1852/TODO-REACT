import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function MainLayout() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
