import { useState } from "react";

function ButtonsToCart({ModifyCart}) {

    const [quantity, setQuantity] = useState(1);

    function AddToCart() {
        setQuantity(quantity + 1);
    }

    function SubstracToCart() {
        if (quantity > 0 && quantity != 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={AddToCart}>+</button>
                <span>{quantity}</span>
                <button onClick={SubstracToCart}>-</button>
                <button onClick={() => ModifyCart(quantity)}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default ButtonsToCart;