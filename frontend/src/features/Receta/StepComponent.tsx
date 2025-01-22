import React from "react";

interface StepComponentProps {
  stepNumber: number;
  stepData: { text: string; image: File | null };
  onTextChange: (text: string) => void;
  onImageChange: (file: File | null) => void;
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  stepData,
  onTextChange,
  onImageChange,
}) => {
  return (
    <div className="border border-gray-300 p-4 rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">Paso {stepNumber}:</h3>
      <textarea
        rows={4}
        value={stepData.text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Describe el paso..."
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files ? e.target.files[0] : null;
          onImageChange(file);
        }}
        className="mb-4"
      />
      {stepData.image && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(stepData.image)}
            alt={`Paso ${stepNumber}`}
            className="w-72 h-72 object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default StepComponent;
