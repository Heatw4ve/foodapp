import FoodItem from "./FoodItem";

export default function FoodList({ recipes, setRecipeId }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <FoodItem key={recipe.id} recipe={recipe} setRecipeId={setRecipeId} />
      ))}
    </div>
  );
}
