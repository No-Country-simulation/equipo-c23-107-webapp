import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const user = {
  name: 'Sarah Johnson',
  imgThumbnail: 'SarahJohnson.png',
  description: 'Cada receta tiene su magia: es un pedacito de historia que vuelve a cobrar vida en la mesa.',
  countRecipes: 4,
  country: 'Uruguay',
};

const ProfilePage = () => {
  return (
    <Layout>
      {user && (
        <div className="-mt-16 flex flex-col justify-center items-center">
          <img src={user.imgThumbnail} alt={user.name} className="mx-auto" />
          <div className='max-w-2xl'>
            <p className="text-center text-xl">"{user.description}"</p>
            <p className="text-center text-2xl">
              {user.name} - {user.countRecipes} recetas cargadas - {user.country}
            </p>
          </div>
          <Link to="/edit-profile">
            <img src="/botonEditar.png" alt="Editar perfil" className="mt-4 w-14" />
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;
