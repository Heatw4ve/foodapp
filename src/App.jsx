import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState("647867");

  return (
    <div>
      <Nav />
      <Search recipes={recipes} setRecipes={setRecipes} />
      <Container>
        <InnerContainer>
          <FoodList recipes={recipes} setRecipeId={setRecipeId} />
        </InnerContainer>

        <InnerContainer>
          <FoodDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
