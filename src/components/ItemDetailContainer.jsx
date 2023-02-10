import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../services/firebase";
import "../assets/css/style.css";
import ButtonsToCart from "./ButtonsCart";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import { cartContext } from "../storage/ContextProvider";

function ItemDetailContainer() {
    const [meal, setMeal] = useState([]);
    let { itemID } = useParams();
    const { addMeal } = useContext(cartContext);

    useEffect(() => {
        getSingleItem(itemID).then((respuesta) => {
            setMeal(respuesta);
        });
    }, [itemID]);

    function ModifyCart(quantityToModify) {
        Toastify({
            text: `"Agregaste el plato ${meal.title} X ${quantityToModify}"`,
            duration: 1500,
            gravity: "bottom",
            position: "center",
        }).showToast();
        meal.quantity = quantityToModify;
        addMeal(meal);
    }

    return (
        <>
            <div className="card-detail_main">
                <div className="card-detail_img">
                    <img src={meal.imgUrl} alt={meal.title} />
                </div>
                <div className="card-detail_detail">
                    <h1>{meal.title}</h1>
                    <h2 className="priceTag">$ {meal.price}</h2>

                </div>
                <ButtonsToCart ModifyCart={ModifyCart} />
            </div>
        </>
    );
}

export default ItemDetailContainer;
