import { ReactNode } from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <footer>
        <p>hola</p>
      </footer>
    </>
  );
};

export default Layout;
