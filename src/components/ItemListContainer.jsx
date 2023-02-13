import React, { useEffect, useState } from "react";
import "../assets/css/style.css"
import Item from "./Item";
import "../assets/css/style.css";
import { useParams,useNavigate } from 'react-router-dom';
import { getAllItems, getItemsByCategory, InsertData } from "../services/firebase"

function ItemListContainer() {
  let { category } = useParams();

  const [meals, setMeals] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (category) {
      getItemsByCategory(category).then((respuesta) => {
        setMeals(respuesta);
        if (respuesta.length == 0){
          navigateTo(`*`)
        }
      }).catch(() =>
        navigateTo(`*`)
      );
    }
    else {
      getAllItems().then((respuesta) => {
        setMeals(respuesta);
      }).catch(() =>
        navigateTo(`*`)
      );
    }


  }, [category]);

  return (
    <>
      <div className="containerCard">
        {meals.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            detail={item.detail}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </>
  )
}

export default ItemListContainer;