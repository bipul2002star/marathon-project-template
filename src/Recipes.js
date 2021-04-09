import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="card-columns">
      {recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
          url={recipe.recipe.url}
          calories={recipe.recipe.calories}
          nutrients = {recipe.recipe.digest}
        />
      ))}
    </div>
  );
};

export default Recipes;
