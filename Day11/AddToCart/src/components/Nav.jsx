import React, { useContext, useEffect } from "react";
import { itemContext } from "../store/itemContext";

function Nav({ showCart }) {
  const { items } = useContext(itemContext);
  const totalCart = items.reduce(
    (currentVal, item) => currentVal + item.amount,
    0
  );
  return (
    <nav>
      <h1>Shoppy</h1>
      <button onClick={showCart}>
        Cart (<span>{totalCart}</span>)
      </button>
    </nav>
  );
}

export default Nav;
