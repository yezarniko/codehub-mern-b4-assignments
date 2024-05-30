import { useContext } from "react";
import Cart from "./Cart";
import { itemContext } from "../store/itemContext";
import EmptyCartIcon from "../assets/ufo.gif";

function Backdrop({ hideCart }) {
  const { items, totalAmount, updateItemAmount, order } =
    useContext(itemContext);

  function handleOrder() {
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
