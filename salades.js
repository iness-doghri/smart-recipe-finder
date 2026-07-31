document.getElementById("validateButton").onclick = function(){


let lettuce = document.getElementById("ingredient-lettuce").checked;
let tomato = document.getElementById("ingredient-tomato").checked;
let cucumber = document.getElementById("ingredient-cucumber").checked;
let onion = document.getElementById("ingredient-onion").checked;
let carrot = document.getElementById("ingredient-carrot").checked;
let corn = document.getElementById("ingredient-corn").checked;
let olive = document.getElementById("ingredient-olive").checked;
let avocado = document.getElementById("ingredient-avocado").checked;
let chickpeas = document.getElementById("ingredient-chickpeas").checked;
let egg = document.getElementById("ingredient-egg").checked;
let chicken = document.getElementById("ingredient-chicken").checked;
let tuna = document.getElementById("ingredient-tuna").checked;
let shrimp = document.getElementById("ingredient-shrimp").checked;
let feta = document.getElementById("ingredient-feta").checked;
let cheese = document.getElementById("ingredient-cheese").checked;
let lemon = document.getElementById("ingredient-lemon").checked;
let oliveOil = document.getElementById("ingredient-olive-oil").checked;
let vinegar = document.getElementById("ingredient-vinegar").checked;
let parsley = document.getElementById("ingredient-parsley").checked;
let mint = document.getElementById("ingredient-mint").checked;


let result = document.getElementById("recipeResult");




// 🥗 Classic Green Salad

if(lettuce && tomato && cucumber && onion){


result.innerHTML = `

<div class="recipe-card">

<h1>🥗 Classic Green Salad</h1>

<p>
A fresh and healthy salad made with crunchy vegetables,
perfect for a light meal.
</p>

<h2>Ingredients</h2>

<ul>
<li>Lettuce</li>
<li>Tomato</li>
<li>Cucumber</li>
<li>Onion</li>
<li>Olive Oil</li>
<li>Lemon</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Wash and cut all vegetables.</li>
<li>Mix lettuce, tomato, cucumber, and onion.</li>
<li>Add olive oil and lemon juice.</li>
<li>Season with salt and pepper.</li>
</ol>


<p>
⏱ Time: 10 minutes <br>
⭐ Difficulty: Easy
</p>

</div>

`;

}



// 🐟 Tuna Salad

else if(lettuce && tuna && corn && olive){


result.innerHTML = `

<div class="recipe-card">

<h1>🐟 Mediterranean Tuna Salad</h1>

<p>
A delicious protein-rich salad with tuna, vegetables,
and a fresh dressing.
</p>

<h2>Ingredients</h2>

<ul>
<li>Lettuce</li>
<li>Tuna</li>
<li>Corn</li>
<li>Olives</li>
<li>Tomato</li>
<li>Lemon</li>
<li>Olive Oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Prepare the vegetables.</li>
<li>Add tuna, corn, and olives.</li>
<li>Mix with lemon juice and olive oil.</li>
<li>Serve fresh.</li>
</ol>


<p>
⏱ Time: 15 minutes <br>
⭐ Difficulty: Easy
</p>

</div>

`;

}



// 🍗 Chicken Salad

else if(chicken && lettuce && cheese && tomato){


result.innerHTML = `

<div class="recipe-card">

<h1>🍗 Chicken Cheese Salad</h1>

<p>
A filling salad with grilled chicken, fresh vegetables,
and cheese.
</p>


<h2>Ingredients</h2>

<ul>
<li>Grilled Chicken</li>
<li>Lettuce</li>
<li>Tomato</li>
<li>Cheese</li>
<li>Olive Oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Cut grilled chicken into pieces.</li>
<li>Add vegetables and cheese.</li>
<li>Season with olive oil and spices.</li>
</ol>


<p>
⏱ Time: 20 minutes <br>
⭐ Difficulty: Easy
</p>

</div>

`;

}



// 🥑 Avocado Chickpea Salad

else if(avocado && chickpeas && cucumber && tomato){


result.innerHTML = `

<div class="recipe-card">

<h1>🥑 Avocado Chickpea Salad</h1>

<p>
A nutritious vegetarian salad rich in vegetables
and healthy ingredients.
</p>


<h2>Ingredients</h2>

<ul>
<li>Avocado</li>
<li>Chickpeas</li>
<li>Cucumber</li>
<li>Tomato</li>
<li>Parsley</li>
<li>Lemon</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Cut avocado and vegetables.</li>
<li>Add chickpeas.</li>
<li>Mix with lemon and parsley.</li>
</ol>


<p>
⏱ Time: 15 minutes <br>
⭐ Difficulty: Easy
</p>

</div>

`;

}



// 🦐 Shrimp Salad

else if(shrimp && lettuce && avocado && lemon){


result.innerHTML = `

<div class="recipe-card">

<h1>🦐 Shrimp Avocado Salad</h1>

<p>
A fresh seafood salad combining shrimp and creamy avocado.
</p>


<h2>Ingredients</h2>

<ul>
<li>Shrimp</li>
<li>Lettuce</li>
<li>Avocado</li>
<li>Lemon</li>
<li>Olive Oil</li>
</ul>


<h2>How to Make It</h2>

<ol>
<li>Cook shrimp.</li>
<li>Add lettuce and avocado.</li>
<li>Season with lemon and olive oil.</li>
</ol>


<p>
⏱ Time: 20 minutes <br>
⭐ Difficulty: Medium
</p>

</div>

`;

}



else{


result.innerHTML = `

<h2>😔 No recipe found</h2>

<p>
Try selecting more ingredients to discover a delicious salad.
</p>

`;

}


};