import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

const demo_URL = "https://jsonplaceholder.typicode.com";
export default function Search({ recipes, setRecipes }) {
  const [query, setQuery] = useState("tandoori chicken");
  const [error, setError] = useState(false);

  const API_KEY = import.meta.env.VITE_REACT_API_KEY;

  useEffect(() => {
    try {
      async function fetchRecipes() {
        const response = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);

        if (response.status === 401) {
          console.error("Unauthorized: 401 error");
          setError(true);
        } else {
          const data = await response.json();
          setRecipes(data.results);
          console.log(data);
        }
      }

      fetchRecipes();
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      {error ? (
        <h2>Unauthorized: 401 error</h2>
      ) : (
        <input
          className={styles.input}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        />
      )}
    </div>
  );
}
