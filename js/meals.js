const loadmeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMealsDetails(data.meals));
};

const loadMealsDetails = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = ``;
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick='displayIdmeal(${meal.idMeal})' class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal.slice(0, 100)}</h5>
                <p class="card-text">${meal.strInstructions}
                </p>
              </div>
            </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchtext = searchField.value;
  loadmeals(searchtext);
  searchField.value = "";
};

const displayIdmeal = (idMeal) => {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  //console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealsDetails(data.meals[0]));
};

const displayMealsDetails = (meal) => {
  const detailContainer = document.getElementById("detail-container");
  detailContainer.innerHTML = "";
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("card");
  mealDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  detailContainer.appendChild(mealDiv);
};

loadmeals("");
