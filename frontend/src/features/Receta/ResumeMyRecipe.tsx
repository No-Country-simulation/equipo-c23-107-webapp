import { Recipe } from '../../core/interface/RecipeInterface';

const ResumeMyRecipe = ({ image, title, id }: Recipe) => {
  return (
    <div key={id} className="relative w-80 h-40">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      <p className="absolute bottom-0 py-2 bg-fondoCeleste w-full text-center  bg-cel bg-opacity-50 text-black text-lg font-bold rounded">{title}</p>
    </div>
  );
};

export default ResumeMyRecipe;
