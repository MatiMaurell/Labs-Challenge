import React, {useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import './Cards.css';



const Cards = ({search}) => {

    useEffect (() => { }, [search])

    if(search.filtered.length) {
        return (
            <div className="generalcards">
                <a href="back2top"></a>
                <div className="cardscontent">
                     {search.filtered.map(c => 
                     <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                     />)}
                </div>
                <a id="back2top" href="#top">Volver al principio </a>
               
            </div>
        )
    } else {
        return (
            <div className="Loading">
            <input type="Image" src="https://pbs.twimg.com/profile_images/1277624531516035077/AVzJYNyz.jpg" height="400" width="500"/>
            </div>
        )
    }
}

export default Cards;