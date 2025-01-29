import { useStore } from 'exome/react';
import { authStore } from '../../core/store/AuthStore';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Headerlinks from './HeaderLinks';

const Header = () => {
  const { loggedIn, checkToken } = useStore(authStore);

  useEffect(() => {
    checkToken();
  }, [loggedIn, checkToken]);


 const links = Headerlinks(loggedIn); 
  return (
    <header className="flex justify-end p-4 bg-header-background">   
      <div className="flex gap-2">
        {links.map(({ to, text, extraClass = '' }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-center py-2 min-w-44 rounded-lg ${extraClass} ${isActive ? 'font-bold border-b-2 border-blue-500' : ''}`
            }
          >
            {text}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
