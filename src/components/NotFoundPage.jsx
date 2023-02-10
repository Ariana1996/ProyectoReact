import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

function NotFoundPage() {

    let navigateTo = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigateTo(-1);
        }, 2000);
    }, []);

    return (
        <div className="centerContent"> 
            <h1>Uppss.. no encontramos el plato</h1>
            <img className="imgNotFound" src="https://www.shutterstock.com/image-vector/vector-illustration-cute-whitered-cat-260nw-2181985225.jpg"></img>
            <span >Serás redireccionado a la página principal</span>
        </div>
    )
}


export default NotFoundPage;