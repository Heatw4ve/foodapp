import Ingredient from "./Ingredient";

export default function FoodIngredients({ recipeDetails, loading }) {
  return (
    <div>
      <h2>Ingredients: </h2>
      <div>
        {loading ? (
          <h2>Loading..</h2>
        ) : (
          recipeDetails.extendedIngredients.map((item) => (
            <Ingredient item={item} />
          ))
        )}
      </div>
    </div>
  );
}
