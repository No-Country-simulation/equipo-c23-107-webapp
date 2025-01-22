import React from "react";

interface IngredientInputProps {
  number: number;
  value: string;
  quantity: string;
  onValueChange: (value: string) => void;
  onQuantityChange: (quantity: string) => void;
  onDelete?: () => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({
  number,
  value,
  quantity,
  onValueChange,
  onQuantityChange,
  onDelete,
}) => {
  return (
    <div className="flex mt-2 items-center mb-4">
      <label
        htmlFor={`ingredient-${number}`}
        className="mr-4 text-gris font-semibold"
      >
        Ing {number}:
      </label>
      <input
        id={`ingredient-${number}`}
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Ingrediente"
        className="flex-1 border border-azulClaro rounded-md p-2 focus:outline-none focus:ring focus:ring-azulOscuro"
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => onQuantityChange(e.target.value)}
        placeholder="Cantidad"
        className="ml-2 w-24 border border-azulClaro rounded-md p-2 focus:outline-none focus:ring focus:ring-azulOscuro"
      />
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="ml-4 text-white bg-amarilloOscuro hover:bg-amarilloClaro px-4 py-2 rounded"
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default IngredientInput;
