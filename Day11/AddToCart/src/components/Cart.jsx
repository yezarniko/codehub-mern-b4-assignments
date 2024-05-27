import React from "react";

function Cart({ product, updateProductAmount }) {
  return (
    <div className="product__card">
      <main>
        <div className="product__card__name">{product.name}</div>
        <div className="product__card__price">$ {product.price}</div>
      </main>
      <aside className="product__card__count">
        <p>x{product.amount}</p>
        <div>
          <button onClick={() => updateProductAmount(product.id, 1)}>+</button>
          <button onClick={() => updateProductAmount(product.id, -1)}>-</button>
        </div>
      </aside>
    </div>
  );
}

export default Cart;
