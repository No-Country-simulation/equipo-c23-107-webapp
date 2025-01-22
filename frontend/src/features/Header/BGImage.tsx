import React from "react";

interface BackgroundProps {
  svgUrl: string;
}

const BGImage: React.FC<BackgroundProps> = ({ svgUrl }) => {
  return (
    <div
      className="w-full h-[325px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${svgUrl})` }}
    ></div>
  );
};

export default BGImage;
