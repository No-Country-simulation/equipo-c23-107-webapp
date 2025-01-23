import { useStore } from "exome/react";
import { authStore } from "../core/store/AuthStore";
import LoginModal from "../features/LoginModal/LoginModal";

const Header = () => {
  const { modalOpen, setModalOpen } = useStore(authStore);
  return (
    <header className="flex flex-1 justify-between p-2 items-center">
      { modalOpen ? <LoginModal /> : null }
      <p className="border-2 px-4 rounded">Idiomas</p>
      <div className="flex gap-2">
        <button className="text-center bg-azulOscuro py-2 text-white min-w-44 rounded-lg cursor-pointer"
          onClick={ () => setModalOpen(!modalOpen) }
        >
          Registro
        </button>
        <p className="text-center bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro cursor-pointer">
          Iniciar Sesión
        </p>
      </div>
    </header>
  );
};

export default Header;
