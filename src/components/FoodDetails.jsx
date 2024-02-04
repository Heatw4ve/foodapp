import { useState, useEffect } from "react";
import styles from "./fooddetails.module.css";
import FoodIngredients from "./FoodIngredients";

export default function FoodDetails({ recipeId }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setRecipeDetails(data);
      setLoading(false);
    }
    fetchDetails();
  }, [recipeId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1>{recipeDetails.title}</h1>
        <img
          className={styles.recipeImage}
          src={recipeDetails.image}
          alt={recipeDetails.title}
        />

        <div className={styles.recipeMetadata}>
          <span>
            <strong>⏱️Preparation Time:</strong> {recipeDetails.readyInMinutes}{" "}
            minutes
          </span>
          <span>
            <strong>🍽️Servings:</strong> {recipeDetails.servings}
          </span>
          <span>
            <strong>🥘Dish Type:</strong>
            {recipeDetails.vegetarian ? "🌱Veg" : "🍗Non-veg"}
          </span>
        </div>

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <span>
              {recipeDetails.cuisines.length ? (
                <div>
                  <strong>Cuisines:</strong>
                  <ul>
                    {recipeDetails.cuisines.map((cuisine) => {
                      return <li>{cuisine}</li>;
                    })}
                  </ul>
                </div>
              ) : (
                <div>No Cuisines Available</div>
              )}
            </span>
          )}
        </div>

        <FoodIngredients recipeDetails={recipeDetails} loading={loading} />

        <h2>Instructions:</h2>
        <div className={styles.recipeInstructions}>
          {loading ? (
            <p>Loading...</p>
          ) : recipeDetails.analyzedInstructions[0].steps.length ? (
            <div>
              <ol>
                {recipeDetails.analyzedInstructions[0].steps.map((step) => {
                  return <li>{step.step}</li>;
                })}
              </ol>
            </div>
          ) : (
            <div>No Instructions Available</div>
          )}
        </div>
      </div>
    </div>
  );
}
