import React from 'react';
import './Filter.css';

const Filter = ({search, order, setOrder, sortProducts, filterProducts}) => {

    const changeOrder = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        if (e.target.name === "size") {
            filterProducts(e.target.value)
        } else {
            sortProducts(e.target.value)
        }
    }

        return (
            <div className="filter">
                <div className="resultados">Hemos encontrado: {search.array.length} resultados</div>
                <div className="ordenar">
                    Ordenar por precio {"  "}
                    <select name="sort" value={order.sort} onChange={ changeOrder }>
                        <option>Lo más nuevo</option>
                        <option value="bajo"> De más bajo a más alto </option>
                        <option value="alto"> De más alto a más bajo </option>
                    </select>
                </div>
                <div className="filter-size">
                    Filtrar por condición {"  "}
                    <select name="size" value={order.size} onChange={  changeOrder }>
                        <option value="All">All</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>
            </div>
        )
    }

export default Filter; 