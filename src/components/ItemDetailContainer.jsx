import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getSingleItem} from "../services/mockFood";
import "../assets/css/style.css";

function ItemDetailContainer() {
    const [meal, setMeal] = useState([]);

    let { itemID } = useParams();

    useEffect(() => {
        
        getSingleItem(itemID).then((respuesta) => {
            setMeal(respuesta);
          });
    
      }, [itemID]);
    

    return (
        <div className="card-detail_main">
            <div className="card-detail_img">
                <img src={meal.imgUrl} alt={meal.tittle} />
            </div>
            <div className="card-detail_detail">
                <h1>{meal.tittle}</h1>
                <h2 className="priceTag">$ {meal.price}</h2>

            </div>
        </div>
    );
}

export default ItemDetailContainer;
