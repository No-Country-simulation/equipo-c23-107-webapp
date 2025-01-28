import { ReactNode } from 'react';
import Header from '../features/Header/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../features/Footer/Footer';
import BGImage from '../features/Header/BGImage';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen grid grid-rows-layout ">
      <Header />
      <div className="flex flex-wrap">
        <div className="md:sticky md:top-0 md:max-h-screen border-r-4 ">
          <Sidebar />
        </div>
        <div className=" md:w-9/12 px-4 py-2  ">
          <BGImage svgUrl="/fondo1.svg" />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );  
};

export default Layout;
