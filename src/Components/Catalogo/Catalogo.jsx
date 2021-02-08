import React from 'react';
import Cards from '../Cards/Cards.jsx';
import Filter from '../Filter/Filter.jsx';
import SearchBarCatalogo from '../SearchBarCatalogo/SearchBarCatalogo.jsx';


const catalogo = ({setSearchApp, search, setOrder, order, sortProducts, filterProducts}) => {


  return ( 
    <div className='catalogo-body'>
      <SearchBarCatalogo {...{search, setSearchApp}}/>
      <Filter {...{search, setOrder, order, sortProducts, filterProducts}}/>
      <Cards {...{search, setSearchApp}}/>
    </div>
    )
};

export default catalogo; 