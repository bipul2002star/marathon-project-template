import React, { useState, useEffect } from "react";
import Recipes from './Recipes';
import Axios from "axios";
import "./Descriptive.css";
import FastfoodIcon from '@material-ui/icons/Fastfood';


const Descriptive = () => {
    const [search, setSerach] = useState("");
    const [lower, setLower] = useState("");
    const [higher, setHigher] = useState("");
    const [health, setHealth] = useState("");
    const [mealType, setMealType] = useState("");
    const [diet, setDiet] = useState("");
    const [cuisine, setCuisine] = useState("");


    const [recipes, setRecipes] = useState([]);


    const APP_ID = "YOUR_ID_HERE";
    const APP_KEY = "YOUR_APPLICATION_KEY_HERE";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const res = await Axios.get(
            `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=${lower}-${higher}&health=${health}&mealType=${mealType}&diet=${diet}&cuisineType=${cuisine}`
        );


        setRecipes(res.data.hits);
    };


    const onInputChangeSearch = eSearch => {
        setSerach(eSearch.target.value);
    };

    const onInputChangeLower = eLower => {
        setLower(eLower.target.value);
    };

    const onInputChangeHigher = eHigher => {
        setHigher(eHigher.target.value);
    };


    const onInputChangeHealth = eHealth => {
        setHealth(eHealth.target.value);
    };

    const onInputChangeMealType = eMealType => {
        setMealType(eMealType.target.value);
    };

    const onInputChangeDiet = eDiet => {
        setDiet(eDiet.target.value);
    };

    const onInputChangeCuisine = eCuisine => {
        setCuisine(eCuisine.target.value);
    };

    const onSearchClick = () => {
        getRecipes();
    };

    return (

        <>
            <div className="container-fluid" id='recipe'>
                <h1 className="display-1 ">
                Find the most delicious food
                </h1>

                <div class="form-group col-md-6 mx-auto">
                    <label for="item"> <FastfoodIcon/> Find your favourite food</label>
                    <input type="text" class="form-control mt-2 mb-4" value={search} placeholder="Find your favourite food" onChange={onInputChangeSearch} />
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="lowerCalorie">Enter the lowest amount of calories required</label>
                    <input type="text" class="form-control mt-2 mb-4" value={lower} placeholder="Enter the lowest amount of calories required" onChange={onInputChangeLower} />
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="highestCalorie">Enter the highest amount of calories required</label>
                    <input type="text" class="form-control mt-2 mb-4" value={higher} placeholder="Enter the highest amount of calories required" onChange={onInputChangeHigher} />
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="mealType" class='mb-2'>Choose the meal type</label>
                    <select class="form-control" value={mealType}
                        onChange={onInputChangeMealType}>
                        <option selected>Choose...</option>
                        <option>breakfast</option>
                        <option>lunch</option>
                        <option>tea time</option>
                        <option>dinner</option>

                    </select>
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="constraint" class=' mt-4 mb-2'>Choose the health constraint</label>
                    <select class="form-control" value={health}
                        onChange={onInputChangeHealth}>
                        <option selected>Choose...</option>
                        <option>alcohol-free</option>
                        <option>immuno-supportive</option>
                        <option>celery-free	</option>
                        <option>crustacean-free	</option>
                        <option>dairy-free</option>
                        <option>fodmap-supportive</option>
                        <option>fish-free	</option>
                        <option>gluten-free</option>

                    </select>
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="diet" class='mt-4 mb-2'>Choose the diet plan</label>
                    <select class="form-control" value={diet}
                        onChange={onInputChangeDiet}>
                        <option selected>Choose...</option>
                        <option>balanced</option>
                        <option>high-fibre</option>
                        <option>high-protein</option>
                        <option>low-carb</option>
                        <option>low-fat</option>
                        <option>low-sodium</option>

                    </select>
                </div>

                <div class="form-group col-md-6 mx-auto">
                    <label for="cuisine" class='mt-4 mb-2'>Choose the cuisine type</label>
                    <select class="form-control" value={cuisine}
                        onChange={onInputChangeCuisine}>
                        <option selected>Choose...</option>
                        <option>indian</option>
                        <option>american</option>
                        <option>asian</option>
                        <option>british</option>
                        <option>eastern european</option>
                        <option>italian</option>

                    </select>


                    <div class="d-grid gap-2 col-6 mx-auto my-4 py-4">
                        <button className="btn btn-success" type="button" onClick={onSearchClick}>Search Food</button>
                    </div>





                    <div className="container">
                        <Recipes recipes={recipes} />
                    </div>

                </div>

            </div>





        </>
    );
};

export default Descriptive;
