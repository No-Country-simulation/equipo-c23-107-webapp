const Header = () => {
  return (
    <header className="flex justify-between p-2 items-center">
      <p className="border-2 px-4 rounded">Idiomas</p>
      <div className="flex gap-2">
        <p className="text-center bg-azulOscuro py-2 text-white min-w-44 rounded-lg">Registro</p>
        <p className="text-center bg-celesteClaro py-2 text-black min-w-44 rounded-lg border-2 border-azulOscuro">Iniciar Sesión</p>
      </div>
    </header>
  );
};

export default Header;
