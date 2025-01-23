import { useStore } from "exome/react";
import { authStore } from "../core/store/AuthStore";
import LoginModal from "../features/LoginModal/LoginModal";
import { Link } from "react-router-dom";

const Header = () => {
  const { modalOpen, setModalOpen } = useStore(authStore);
  return (
    <header className="flex flex-1 justify-between p-2 items-center">
      {modalOpen ? <LoginModal /> : null}
      <p className="border-2 px-4 rounded">Idiomas</p>
      <div className="flex gap-2">
        <button className="text-center bg-azulOscuro py-2 text-white min-w-44 rounded-lg cursor-pointer" onClick={() => setModalOpen(!modalOpen)}>
          Probar Login
        </button>

        <Link to="/register" className="text-center bg-azulOscuro py-2 text-white min-w-44 rounded-lg">
          Registro
        </Link>
        <Link to="/login" className="text-center bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro">
          Iniciar Sesión
        </Link>
        <Link to="/profile" className="text-center bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro">
          Ir al perfil
        </Link>
        <Link to="/create-recipe" className="text-center bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro">
          Crear Receta
        </Link>
      </div>
    </header>
  );
};

export default Header;
