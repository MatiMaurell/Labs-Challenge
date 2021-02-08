import './SearchIndex.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';


const searchindex = ({setSearchApp, search}) => {

 


return (
    <div>
      <head> <script defer src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js"/></head>
      <div className= "backgroundsearchindex" >
      <div id="titleindexsearchcontent"> 
            <div id="titleindexsearch"><h2>¿Qué estás buscando?</h2></div> <br/>
              <div>
                  <SearchBar setSearchApp={setSearchApp} search={search}
                  />
              </div>
            </div>
      </div>    
    </div>
    )
}

export default searchindex; 