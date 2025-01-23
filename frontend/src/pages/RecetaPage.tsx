import IngredientForm from '../features/Receta/IngredientForm';
import BGImage from '../features/Header/BGImage';
import Layout from '../layouts/Layout';

const RecetaPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <BGImage svgUrl="/fondo1.svg" />
        <IngredientForm />
      </div>
    </Layout>
  );
};

export default RecetaPage;
