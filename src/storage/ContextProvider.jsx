const { createContext, useState } = require("react");

export const cartContext = createContext();

export default function ContextProvider(props) {
    let [cart, modifyCart] = useState([]);

    function addMeal(meal) {
        const resultado = cart.findIndex(cartmeal => cartmeal.id == meal.id);

        //-1 cuando no encuentra el resultado
        if (resultado != -1) {
            const newCart = [...cart]
            newCart[resultado].quantity = meal.quantity + newCart[resultado].quantity;
            modifyCart(newCart);
        }
        else {
            modifyCart([...cart, meal]);
        }

    }

    function SubstractMeal(mealID) {
        const resultado = cart.findIndex(cartmeal => cartmeal.id == mealID);
        let newCart = [...cart]
        newCart.splice(resultado, 1);
        modifyCart(newCart);
    }

    function ClearCart() {
        modifyCart([]);
    }


    const GetMealCount = () => cart.reduce((a, b) => a + b.quantity, 0);

    const GetTotalToPay = () => cart.reduce((a, b) => a + (b.price * b.quantity), 0);


    const exportFunctions = {
        addMeal,
        SubstractMeal,
        ClearCart,
        GetMealCount,
        cart,
        GetTotalToPay
    };

    return (
        <cartContext.Provider value={exportFunctions}>{props.children}</cartContext.Provider>
    );
}
