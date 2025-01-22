import React, { useState } from "react";

interface TiempoInputProps {
  onChange: (value: string) => void;
}

const TiempoInput: React.FC<TiempoInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(null); // Limpiar error mientras se escribe
    onChange(e.target.value); // Notificar al padre del cambio
  };

  const handleBlur = () => {
    if (!value.trim()) {
      setError("Este campo es obligatorio.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="tiempo-input" className="font-medium text-gris">
        Tiempo total:
      </label>
      <input
        id="tiempo-input"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ej: 30 minutos, 1 hora"
        className={`p-2 mb-2 border rounded-md ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:ring-2 focus:ring-azulClaro"
        } focus:outline-none`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TiempoInput;
