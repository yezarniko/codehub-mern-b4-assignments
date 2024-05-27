import React, { useContext, useEffect } from "react";
import Cart from "./Cart";
import { itemContext } from "../store/itemContext";
import EmptyCartIcon from "../assets/ufo.gif";

const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "Fresh Banan from Thailand",
  },
  {
    id: 2,
    price: 11.98,
    name: "Apple",
    description: "Fresh Apple from Thailand",
  },
  {
    id: 3,
    price: 12.98,
    name: "Kiwi",
    description: "Fresh Kiwi from Thailand",
  },
  {
    id: 4,
    price: 13.98,
    name: "Mango",
    description: "Fresh Mango from Thailand",
  },
  {
    id: 5,
    price: 14.98,
    name: "Orange",
    description: "Fresh Orange from Thailand",
  },
];

function Backdrop({ hideCart }) {
  const { items, totalAmount, updateItemAmount, order } =
    useContext(itemContext);

  function handleOrder(e) {
    if (items.length > 0) {
      order();
      hideCart();
    } else {
      alert("Your cart is empty! You can't order!");
    }
  }

  return (
    <>
      <section className="backdrop" onClick={hideCart}></section>
      <section className="cart">
        <div className="cart__cartList">
          {items.length >= 1 ? (
            items.map((item) => (
              <Cart
                key={item.id}
                product={item}
                updateProductAmount={updateItemAmount}
              />
            ))
          ) : (
            <div className="cart__empty">
              <img src={EmptyCartIcon} />
              <p>Empty Cart</p>
            </div>
          )}
        </div>
        <aside>
          <div>
            <h4>Total Price </h4>
            <div>$ {totalAmount.toFixed(2)}</div>
          </div>
          <div>
            <button onClick={hideCart}>Close</button>
            <button onClick={handleOrder}>Order</button>
          </div>
        </aside>
      </section>
    </>
  );
}

export default Backdrop;
