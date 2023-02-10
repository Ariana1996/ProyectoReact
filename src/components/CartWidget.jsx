import "../assets/css/style.css"
import { cartContext } from "../storage/ContextProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

function CardWidget() {
      const { GetMealCount } = useContext(cartContext);

      return (
            <>
                  <Link className="nav-link" to="/cart">
                        {GetMealCount()}🛒
                  </Link>
            </>
      );
}
export default CardWidget;