import IngredientForm from "../features/Receta/IngredientForm";

import Layout from "../layouts/Layout";
import Footer from "../features/Footer/Footer";

const RecetaPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <IngredientForm />
        <Footer />
      </div>
    </Layout>
  );
};

export default RecetaPage;
