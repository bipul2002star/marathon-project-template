import React from "react";
import './RecipeItem.css'

const RecipeItem = props => {
  const { name, image, ingredientLines, url, calories, nutrients } = props;
  return (
    <>

      <div className='card_section'>
        <div className="card py-2 text-center">
          <img src={image} className="img-fluid mx-auto rounded-circle " />
          <div class="card__info">
            <h2>{name}</h2>
            <h3><strong>Calories:</strong>{calories}</h3>

            {/* <ul class="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul> */}
            <ul class="list-group list-group-flush">
              {nutrients.map(nutrient => (
                <li className="list-group-item">{nutrient.label}:{nutrient.total}{nutrient.unit} </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="receipe text-center">
        <p className="text-center py-2 display-5">Planning to celebrate in Office?</p>
        <a href="{url}" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">Get It Here</a>
        <p className="text-center py-2 display-5">Feeling Hungry? Grab Here:</p>
        <a href="https://www.bistro.sk/en/donaska-kosice/" class="btn btn-danger btn-lg btn-block" role="button" aria-disabled="true">Order Online</a>
          <div class="card__info">
            <h2>Ingredients</h2>
            <ul class="list-group list-group-flush">
              {ingredientLines.map(ingredient => (
                <li className="list-group-item">{ingredient}</li>
              ))}
            </ul>

          </div>
        </div>



      </div>

    </>

  );
};


































export default RecipeItem;