import { cartContext } from "../storage/ContextProvider";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CartContainer() {
    const { cart, SubstractMeal, GetTotalToPay, ClearCart } = useContext(cartContext);
    const navigateTo = useNavigate();

    function CreateOrder() {
        navigateTo(`/create-order/`);
    }

    return (
        <>
            {cart.length > 0 ?
                <div>
                    <table className="cartList">
                        <thead>
                            <tr className="cartList_row">
                                <th></th>
                                <th>Nombre</th>
                                <th>Precio por unidad</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((meal) => (
                                <tr key={meal.id} className="cartList_row">
                                    <td><img src={meal.imgUrl} className="cartList_img"></img></td>
                                    <td>{meal.title}</td>
                                    <td>$ {meal.price}</td>
                                    <td>{meal.quantity}</td>
                                    <th>$ {meal.quantity * meal.price}</th>
                                    <td>
                                        <button className={meal.id} onClick={() => SubstractMeal(meal.id)}>Eliminar Item</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="cartList_total">
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total</th>
                                <th>$ {GetTotalToPay()}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="cartOptions"> 
                        <button onClick={() => ClearCart()}>Eliminar carrito</button>
                        <button onClick={() => CreateOrder()}>Finalizar carrito</button>

                    </div>
                </div>

                :
                <div className="centerContent">
                    <h1>Aún no tenes platos en tu carrito</h1>
                    <img className="img_cartEmpty" src="https://media.istockphoto.com/id/152504378/es/foto/hambre-alcanc%C3%ADa.jpg?s=1024x1024&w=is&k=20&c=IYorDuDyi7dqyS5L1FbZjYPjFruArIeFaE7dNxWte_o="></img>
                </div>

            }
        </>
    )
}

export default CartContainer;