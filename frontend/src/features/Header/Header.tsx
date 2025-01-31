import { useStore } from "exome/react";
import { authStore } from "../../core/store/AuthStore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Headerlinks from "./HeaderLinks";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const { loggedIn, checkToken } = useStore(authStore);

  useEffect(() => {
    checkToken();
  }, [loggedIn, checkToken]);

  const links = Headerlinks(loggedIn);

  return (
    <header className="flex justify-between items-center p-4 bg-header-background">
      {/* Para usuario logueado */}
      {loggedIn && <HomeButton />}

      {/* Si no esta logueado */}
      {!loggedIn && (
        <div className="flex gap-2">
          {links.map(({ to, text, extraClass = "" }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-center py-2 min-w-44 rounded-lg ${extraClass} ${
                  isActive ? "font-bold border-b-2 border-blue-500" : ""
                }`
              }
            >
              {text}
            </NavLink>
          ))}
        </div>
      )}

      {loggedIn && <ProfileButton />}
    </header>
  );
};

export default Header;
