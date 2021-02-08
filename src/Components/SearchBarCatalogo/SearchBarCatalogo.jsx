import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './SearchBarCatalogo.css'

const SearchBarCatalogo = ({setSearchApp, search}) => {

function handleChange(e){
    setSearchApp({
        ...search,
        word: e.target.value
        });
}

async function handleSubmit(e){
    if(!search){
        return alert ("Write a product name!")
    };
    await axios.get (`http://localhost:4000/api/search?query=${search.word}`) 
    .then ((res) => {
        setSearchApp({
            array: res.data,
            word: search.word,
            filtered: res.data
            });
    })
}


return (
    <div>
        <div class="sch">
            <input class="buscar-txt-catalogo" value = {search.word} type="text" name="" onChange = { (e) => handleChange (e) } />
            <a class="buscar-btn-catalogo"><Link to = {search.word && `/catalogo`}> <button className = "btn2" type = "submit" onClick = { (e) => handleSubmit (e) } ><SearchOutlinedIcon/></button></Link>
            <i class="far fa search"></i>
            </a>
        </div>
    </div>
)
    
}

export default SearchBarCatalogo; 