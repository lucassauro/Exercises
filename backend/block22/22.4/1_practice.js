const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  res.send(drinks.sort((a, b) => a.name.localeCompare(b.name)));
})

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({ message: 'Drink created successfully' })
  console.log(drinks)
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));
  return !drink 
    ? res.status(404).json({message: 'Drink not found!'})
    : res.status(200).json(drink);
})

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));
  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });
  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price};
  console.log(drinks);
  res.status(204).end();
})

app.delete('/drinks/:id' , (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));
  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' })
  drinks.splice(drinkIndex, 1);
  console.log(drinks)
  res.status(204).end();
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks
  .filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()))
  res.status(200).json(filteredDrinks)
})



app.get('/recipes', (_req, res) => {
  res.send(recipes.sort((a, b) => a.name.localeCompare(b.name)));
})

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' }); 
  console.log(recipes);
  // status 201 means that occurred a operation that persists information.
})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))
  return !recipe 
  ? res.status(404).json({ message: 'Recipe not found!' }) 
  : res.status(200).json(recipe);
})

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime};
  console.log(recipes)
  // res.status(200).json({ message: 'Recipe updated!' });
  res.status(204).end();
  // status 2xx means success and 204 specifically means that the success response has no content. 
  // Even if status 204 is followed by a response with content, the client wont receive it. 
  // For example: 
  // res.status(204).json({ message: 'this message wont be delivered to the client, as status 204 has no content' });
})

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' })
  
  recipes.splice(recipeIndex, 1);
  console.log(recipes)
  res.status(204).end();
})

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  let filteredRecipes = recipes
    .filter((recipe) => { 
      return recipe.name.toLowerCase().includes(name.toLowerCase()) 
      && recipe.price <= parseInt(maxPrice) 
      && recipe.price >= parseInt(minPrice)
    });
  if (filteredRecipes.length === 0) filteredRecipes = recipes;
  res.status(200).json(filteredRecipes);
})



// example ONLY for illustrating. This logic should NOT be implemented on real authentication, obviously.
app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  console.log('req.headers', req.headers);
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid token!' });
  res.status(200).json({ message: 'Valid Token' })
})

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` })
})

app.listen(3000, () => {
  console.log('listening')
})