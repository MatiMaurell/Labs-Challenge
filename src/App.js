import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import index from './Components/Index/Index.jsx';
import Contact from './Components/Contact/Contact.jsx';
import SearchIndex from './Components/SearchIndex/SearchIndex.jsx';
import Nav from './Components/NavBar/NavBar.jsx';
import Catalogo from './Components/Catalogo/Catalogo.jsx';

function App() {
  
  // Search state
  const [search, setSearchApp] = useState({
    array: [],
    word: "",
    filtered: [],
    });


  // Filters state
  const [order, setOrder] = useState({
    size: "",
    sort: "",
  });      

  useEffect(() => {}, [search, order])

      
  //Clonar un arreglo
  const clone = matriz => matriz.map(i => (Array.isArray(i) ? clone(i) : i));


  // Para ordenar
  const sortProducts = (sort) => {
    setSearchApp({
      ...search,
      filtered: search.array.sort((a,b) => 
      sort === "lower"
        ? a.price > b.price ? 1 : -1
      : sort === "higher"
        ? a.price < b.price ? 1 : -1
      : a.id < b.id ? 1  : -1
    )})
  };
 

  // Por condición
  const filterProducts = (size) => {
   if (size === "All"){
     setSearchApp({
       ...search,
       filtered: clone(search.array)
     })
   } else {
     setSearchApp({
    ...search,
    filtered: search.array.filter(product => product.condition.toLowerCase() === size.toLowerCase())
    })
  }
};




  return (
    <div className = 'app'>
      <Router>
          <Nav/>
          <Route
            exact path='/'
            component={index}
          />
        
          <Route exact path='/searchindex'>
           <SearchIndex {...{search, setSearchApp}}/>
          </Route>
          <Route exact path='/contact'>
          <Contact/>
          </Route>
          <Route exact path='/catalogo'>
          <Catalogo {...{setSearchApp, search, setOrder, order, sortProducts, filterProducts}}/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
