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
      <div className="flex-auto grid grid-cols-6 grid-rows-1">
        <Sidebar />
        <div className="col-span-2  grid grid-cols-7">
          <main>{children}</main>
        </div>
      </div>
      <footer className="flex-1">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
