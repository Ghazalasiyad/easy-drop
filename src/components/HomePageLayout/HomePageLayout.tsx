import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Prenav from '../Prenav/Prenav';

const HomePageLayout: React.FC = () => {
  return (
    <div>
      <Prenav />
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default HomePageLayout;
