import React, { useContext, useRef } from "react";
import { itemContext } from "../store/itemContext";

function Card({ product }) {
  const { addItemToCart } = useContext(itemContext);
  const productCountRef = useRef(null);

  function addButtonHandler() {
    const productCount = parseInt(productCountRef.current.value);
    if (productCount >= 1 && productCount <= 5) {
      console.log(productCount);
      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: productCount,
      });
    } else {
      alert("Please enter a valid ammount");
    }
    productCountRef.current.value = 1;
  }

  return (
    <div className="product__card">
      <main>
        <div className="product__card__name">{product.name}</div>
        <div className="product__card__details">{product.description}</div>
        <div className="product__card__price">$ {product.price}</div>
      </main>
      <aside className="product__card__count">
        <input
          type="number"
          min={1}
          max={5}
          defaultValue={1}
          ref={productCountRef}
        />
        <button onClick={addButtonHandler}>+Add</button>
      </aside>
    </div>
  );
}

export default Card;
