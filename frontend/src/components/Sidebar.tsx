import Logo from './Logo';

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center justify-center h-full min-w-40 md:min-w-72">
      <Logo />
      <div className="w-full max-w-md rounded-lg">
        <form className="flex flex-col items-center space-y-4">
          <div className="max-w-48">
            <div className="w-full">
              
              <input
                type="text"
                id="search"
                name="search"
                aria-label="Buscar"
                aria-describedby="search-help"
                className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Escribe lo que buscas"
              />
            </div>

            <div className="w-full">
              <label htmlFor="country" className="block text-lg font-bold text-black">
                Selecciona Países
              </label>
              <select
                id="country"
                name="country"
                aria-label="Selecciona País"
                className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona un país</option>
                <option value="argentina">Argentina</option>
                <option value="bolivia">Bolivia</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="paraguay">Paraguay</option>
                <option value="peru">Perú</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
              </select>
            </div>

            <div className="w-full mb-4">
              <label htmlFor="categories" className="block text-lg font-bold text-black">
                Categorías
              </label>
              <select
                id="categories"
                name="categories"
                aria-label="Selecciona Categoría"
                required
                className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona una categoría</option>
                <option value="salsas">Salsas</option>
                <option value="pastas">Pastas</option>
                <option value="arroz">Arroz</option>
                <option value="legumbres">Legumbres</option>
                <option value="panes">Panes</option>
                <option value="postres">Postres</option>
                <option value="bebidas">Bebidas</option>
                <option value="ensaladas">Ensaladas</option>
                <option value="carnes">Carnes</option>
                <option value="pescados">Pescados</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
