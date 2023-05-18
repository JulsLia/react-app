//import logo from './logo.svg';//
import './App.css';
import Dishes from './components/Image';

function App() {


  let dishes = [
    {
      name: 'Classic Lasagne',
      ingredients: ['minced meat', 'bechamel sauce', 'lasagne', 'cheese'],
      costPrice: 0,
      salePrice: 450,
      profit: 0,
      image: '/image dishes/Classic lasagne.jpg'
    
    },

    {
      name: 'Caesar Salad With Shrimp',
      ingredients: ['romano salad', 'shrimp', 'cherry tomatoes', 'crackers', 'salad dressing', 'parmesan cheese'],
      costPrice: 0,
      salePrice: 480,
      profit: 0,
      vegetarianMeal: 'false',
      image: '/image dishes/Caesar Salad With Shrimp.jpg'
    },

    {
      name: 'Eggplant Salad',
      ingredients: ['fried eggplant', 'tomatoes', 'bulgarian pepper', 'red onion', 'mozzarella', 'parsley', 'dill', 'cilantro', 'corn starch'],
      costPrice: 0,
      salePrice: 300,
      profit: 0,
      vegetarianMeal: 'true',
      image: '/image dishes/Eggplant Salad.jpeg'
    },

    {
      name: 'Cream Soup Of Champignons',
      ingredients: ['champignons', 'potatoes', 'onion', 'cream'],
      costPrice: 0,
      salePrice: 350,
      profit: 0,
      vegetarianMeal: 'true',
      image: '/image dishes/Cream Soup Of Champignons.jpeg'
    },
  
    {
      name: 'Pizza Barbecue',
      ingredients: ['dough', 'barbecue sauce', 'chicken fillet', 'mozzarella', 'parmesan cheese', 'olives', 'red onion', 'tomato sauce'],
      costPrice: 0,
      salePrice: 600,
      profit: 0,
      vegetarianMeal: 'false',
      image: '/image dishes/Pizza Barbecue.jpg'
    },

    {
      name: 'Pasta Bolognese',
      ingredients: ['ground beef', 'spaghetti', 'tomato sauce', 'onion', 'parmesan cheese', 'basil', 'garlic'],
      costPrice: 0,
      salePrice: 450,
      profit: 0,
      vegetarianMeal: 'false',
      image: '/image dishes/Pasta Bolognese.jpeg'
    },

    {
      name: 'Grilled Beef With Potatoes And Eggplant',
      ingredients: ['beef', 'potatoes', 'eggplant'],
      costPrice: 300,
      salePrice: 650,
      profit: 0,
      vegetarianMeal: 'false',
      image: '/image dishes/Grilled Beef With Potatoes And Eggplant.jpg'
    },

    {
      name: 'Meringue Roll',
      ingredients: ['sugar', 'egg whites', 'pistachios', 'pistachio paste', 'lemon juice', 'corn starch', 'raspberry', 'cream', 'mascarpone'],
      costPrice: 0,
      salePrice: 300,
      profit: 0,
      vegetarianMeal: 'true',
      image: '/image dishes/Meringue Roll.jpeg'
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>MENU</h1>
        {dishes.map(item => (
        <Dishes  image={item.image} className="element" name={item.name} salePrice={item.salePrice} ingredients={item.ingredients.join(', ')}/>))}
        
        {/* <Dishes image={item.image}/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />//
         <p>
          Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
