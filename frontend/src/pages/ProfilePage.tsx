import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ResumeMyRecipe from '../features/Receta/ResumeMyRecipe';
import { Recipe } from '../core/interface/RecipeInterface';
import { useEffect, useState } from 'react';

const user = {
  name: 'Sarah Johnson',
  imgThumbnail: 'SarahJohnson.png',
  description: 'Cada receta tiene su magia: es un pedacito de historia que vuelve a cobrar vida en la mesa.',
  countRecipes: 4,
  country: 'Uruguay',
};

const ProfilePage = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('../../src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(() => {
        console.error('Error loading recipes');
        setError('Ocurrió un error al cargar las recetas. Inténtalo nuevamente más tarde.');
        setRecipes([]);
      });
  }, []);

  return (
    <Layout>
      <div className="-mt-16 flex flex-col justify-center items-center">
        <img src={user.imgThumbnail} alt={user.name} className="mx-auto" />
        <div className="max-w-2xl">
          <p className="text-center text-xl">"{user.description}"</p>
          <p className="text-center text-2xl">
            {user.name} - {user.countRecipes} recetas cargadas - {user.country}
          </p>
        </div>
        <Link to="/edit-profile">
          <img src="/botonEditar.png" alt="Editar perfil" className="mt-4 w-14" />
        </Link>
        <div className="bg-celestePopup w-full min-h-40 flex flex-col items-center justify-center my-4">
          <p className="text-2xl max-w-2xl text-center pt-2">
            Aquí puedes cargar tus recetas y compartirlas a otros usuarios de Las recetas de la Nona:
          </p>
          <Link
            to="/create-recipe"
            className="bg-celesteBoton flex items-center justify-center rounded-lg px-4 py-3 text-gray-700 hover:bg-amarilloOscuro transition-all max-w-[200px]"
          >
            Añadir Nueva Receta
          </Link>
        </div>

        {/* Mostrar mensaje de error si ocurre */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {recipes === null ? (
          <p className="text-center text-gray-500 mt-10">Cargando recetas...</p>
        ) : recipes.length > 0 ? (
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Mis Recetas</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 my-6">
              {recipes.map((recipe, index) => (
                <ResumeMyRecipe key={index} {...recipe} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-gray-600 text-lg font-semibold mb-4">¡Vaya! Todavía no tienes recetas cargadas.</p>
            <img src="/abuela.png" alt="No hay recetas" className="w-60 h-60 mb-4" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;
