import IngredientForm from "../features/Receta/IngredientForm";
import BGImage from "../features/Header/BGImage";
import Layout from "../layouts/Layout";
import Footer from "../features/Footer/Footer";

const RecetaPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <BGImage svgUrl="/fondo1.svg" />
        <IngredientForm />
        <Footer />
      </div>
    </Layout>
  );
};

export default RecetaPage;
