const Header = () => {
  return (
    <header className="flex justify around">
      <p>Idiomas</p>
      <div className="flex gap-2">
        <p className="bg-azulOscuro py-2 text-white min-w-44 rounded-lg">Registro</p>
        <p className="bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro">Iniciar Sesión</p>
      </div>
    </header>
  );
};

export default Header;
