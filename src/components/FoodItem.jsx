import styles from "./fooditem.module.css";

export default function FoodItem({ recipe, setRecipeId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} alt={recipe.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <button
        onClick={() => {
          console.log(recipe.id);
          setRecipeId(recipe.id);
        }}
        className={styles.itemButton}
      >
        View Recipe
      </button>
    </div>
  );
}
