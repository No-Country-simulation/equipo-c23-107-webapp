import React from "react";
import IngredientForm from "../features/Receta/IngredientForm";
import BGImage from "../features/Header/BGImage";

const RecetaPage = () => {
  return (
    <div style={{ padding: "16px" }}>
      <BGImage svgUrl="/fondo1.svg" />
      <IngredientForm />
    </div>
  );
};

export default RecetaPage;
