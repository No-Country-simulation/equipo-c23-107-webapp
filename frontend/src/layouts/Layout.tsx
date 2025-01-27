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
    <div className="min-h-screen grid grid-rows-layout mx-auto ">
      <Header />
      <div className="flex flex-wrap">
        <div >
          <div className="sticky top-0 max-h-screen">
            <Sidebar />
          </div>
        </div>
        <div className="w-7/12 md:w-9/12 p-4 border-l-4 ">
          <BGImage svgUrl="/fondo1.svg" />
          <main>{children}</main>
        </div>
      </div>
      <Footer />  
    </div>
  );  
};

export default Layout;
