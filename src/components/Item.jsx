import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function Item({id, title, price, imgUrl}) {
    const urlDetail = `/item/${id}`;
    return (
        <>        
        <div className="card">          
            <img src={imgUrl} className="card-img-top"></img>
            <div className="container">
            <h4><b>{title}</b></h4>
                <p className="card-text">Price ${price}</p>
                <Link to={urlDetail}>
                    Ver detalle
                </Link>
            </div>
        </div>
        </>
    );
}

export default Item;