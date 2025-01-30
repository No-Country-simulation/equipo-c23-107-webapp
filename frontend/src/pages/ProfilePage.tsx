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
        <div className='-mt-16 '>
          <img src={user.imgThumbnail} alt={user.name} className='mx-auto' />
          <h1>{user.name}</h1>
          <p>{user.description}</p>
          <p>{user.countRecipes} recetas</p>
          <p>{user.country}</p>
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;
