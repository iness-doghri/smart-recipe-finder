

document.getElementById("validateButton").onclick = function(){


let tomato = document.getElementById("ingredient-tomato").checked;
let onion = document.getElementById("ingredient-onion").checked;
let garlic = document.getElementById("ingredient-garlic").checked;
let chicken = document.getElementById("ingredient-chicken").checked;
let pasta = document.getElementById("ingredient-pasta").checked;
let cheese = document.getElementById("ingredient-cheese").checked;
let cream = document.getElementById("ingredient-cream").checked;
let rice = document.getElementById("ingredient-rice").checked;
let fish = document.getElementById("ingredient-fish").checked;
let lemon = document.getElementById("ingredient-lemon").checked;


let result = document.getElementById("recipeResult");



// 🍝 Creamy Chicken Pasta

if(chicken && pasta && cream && cheese){

result.innerHTML = `

<div class="recipe-card">

<h1>🍝 Creamy Chicken Pasta</h1>

<p>
A delicious creamy pasta recipe made with tender chicken,
cheese, and a rich sauce. A perfect homemade meal that is
easy to prepare and full of flavor.
</p>


<h2>Ingredients</h2>

<ul>
<li>Chicken</li>
<li>Pasta</li>
<li>Cream</li>
<li>Cheese</li>
<li>Garlic</li>
<li>Olive oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Cook pasta in salted boiling water.</li>
<li>Cut chicken into pieces and cook with olive oil.</li>
<li>Add garlic and cream to make the sauce.</li>
<li>Add cheese and mix well.</li>
<li>Combine pasta with the sauce and serve.</li>
</ol>


<p>
⏱ Time: 35 minutes <br>
⭐ Difficulty: Easy
</p>


</div>

`;

}


// 🍅 Tomato Pasta

else if(pasta && tomato && onion && garlic){


result.innerHTML = `

<div class="recipe-card">

<h1>🍅 Homemade Tomato Pasta</h1>

<p>
A simple and tasty pasta recipe using fresh tomatoes and
aromatic ingredients. Perfect for a quick lunch or dinner.
</p>


<h2>Ingredients</h2>

<ul>
<li>Pasta</li>
<li>Tomato</li>
<li>Onion</li>
<li>Garlic</li>
<li>Cheese</li>
<li>Olive oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Boil the pasta.</li>
<li>Cook onion and garlic with olive oil.</li>
<li>Add tomatoes and spices.</li>
<li>Mix pasta with the sauce.</li>
<li>Add cheese before serving.</li>
</ol>


<p>
⏱ Time: 30 minutes <br>
⭐ Difficulty: Easy
</p>


</div>

`;

}


// 🍗 Chicken Rice

else if(chicken && rice && onion && carrot){


result.innerHTML = `

<div class="recipe-card">

<h1>🍗 Chicken Rice</h1>

<p>
A comforting homemade dish with tender chicken, vegetables,
and flavorful rice. A perfect family meal.
</p>


<h2>Ingredients</h2>

<ul>
<li>Chicken</li>
<li>Rice</li>
<li>Onion</li>
<li>Carrot</li>
<li>Spices</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Cook onion with oil.</li>
<li>Add chicken and spices.</li>
<li>Add carrots and rice.</li>
<li>Add water and cook until ready.</li>
<li>Serve hot.</li>
</ol>


<p>
⏱ Time: 45 minutes <br>
⭐ Difficulty: Medium
</p>


</div>

`;

}


// 🐟 Fish Lemon Recipe

else if(fish && lemon && garlic){


result.innerHTML = `

<div class="recipe-card">

<h1>🐟 Lemon Garlic Fish</h1>

<p>
A fresh and healthy fish dish with lemon, garlic, and herbs.
Simple, light, and full of flavor.
</p>


<h2>Ingredients</h2>

<ul>
<li>Fish</li>
<li>Lemon</li>
<li>Garlic</li>
<li>Parsley</li>
<li>Olive oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Season the fish with lemon and spices.</li>
<li>Add garlic and olive oil.</li>
<li>Cook until the fish is tender.</li>
<li>Serve with parsley.</li>
</ol>


<p>
⏱ Time: 25 minutes <br>
⭐ Difficulty: Easy
</p>


</div>

`;

}

else{

result.innerHTML = `

<h2>😔 No recipe found</h2>

<p>
Try selecting more ingredients to discover a delicious meal.
</p>

`;

}


};