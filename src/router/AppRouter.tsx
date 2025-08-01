import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../components/ui/navBar';
import { PageRootLayout } from '../components/layout/pageLayout';
import MainRoutes from './MainRoutes';
import { useIsMobile } from '../hooks/useMediaQuery';
import SideBarMenu from '../components/ui/sideBarMenu/menuDesktop';
import MenuMobile from '../components/ui/sideBarMenu/menuMobile';

const AppRouter: React.FC = () => {

  const isMobile = useIsMobile()

  return (
    <Router>
      <Navbar />
      {isMobile ? <MenuMobile/> : (<SideBarMenu />) }
      <PageRootLayout>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </PageRootLayout>
    </Router>
  );
};

export default AppRouter;