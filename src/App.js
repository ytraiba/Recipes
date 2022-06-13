import React, {useEffect, useState} from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import Recipe from "./recipe";
import './App.css';
import Title from "./title.png";

const App=() => {
  const APP_ID = "01708403"
  const APP_KEY = "0fe74629ff04c5eb1d02ea1d6991a473";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta');

  useEffect(() => {
    getRecipes();
  } , [query]);

  const getRecipes =  async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">

      <section className="h-[50vh] flex flex-col justify-center items-center py-72">
        <img className="w-auto h-[15vh]" src={Title} alt=""/>
        <p className="text-md sm:text-xl text-center font-bold pt-12">Scroll to search for ingredient lists based on any keyword.</p>
        <p className="font-light">The implemented API is limited to 10 searchs per minute.</p>
      </section>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar border-2 rounded-md" type="text" value={search} onChange={updateSearch} />
        <button className="search-button border-2 rounded-md" type="submit"> 
        Submit
        </button>
      </form>


      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.uri.split("#")[1]}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories.toString().split(".")[0]} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      
        ))}
      </div>
    </div> 
  );
}

export default App;
