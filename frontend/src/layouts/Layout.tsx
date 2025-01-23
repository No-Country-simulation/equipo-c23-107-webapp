import { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <Header />
      <div className="flex flex-wrap">
        <div className="w-5/12 md:w-3/12">
          <div className="sticky top-0 max-h-screen">
            <Sidebar />
          </div>
        </div>
        <div className="w-7/12 md:w-9/12 p-4 border-l-4 ">
          <main>{children}</main>
        </div>
      </div>
      <footer className="flex-1">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
