import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./SearchBar.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchBar = ({setSearchApp, search}) => {

    function handleChange(e){
        setSearchApp({
            ...search,
            word: e.target.value
            });
    }

    async function handleSubmit(e){
        if(!search.word){
            return alert ("Escribe el nombre de un producto")
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
            <div class="buscar-caja">
                <input class="buscar-txt" value = {search.word} type="text" name=""  onChange = { (e) => handleChange (e) } />
                <a class="buscar-btn"><Link to = {search.word && `/catalogo`}> <button className = "btn2" type = "submit" onClick = { (e) => handleSubmit (e) } ><SearchOutlinedIcon/></button></Link>
                <i class="far fa search"></i>
                </a>
            </div>
        </div>
    )
    
}

export default SearchBar; 