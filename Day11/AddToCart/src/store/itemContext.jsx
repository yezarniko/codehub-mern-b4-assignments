import { createContext, useEffect, useState } from "react";

const removeItemHandler = () => {};

export const itemContext = createContext(null);

function ItemContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function getCurrentItemIndex(id) {
    const currentItem = items.find((currentItem) => currentItem.id == id);
    const currentItemIndex = items.indexOf(currentItem);
    return currentItemIndex;
  }

  function updateItemAmount(id, amount) {
    const index = getCurrentItemIndex(id);
    let tempItems = [...items];
    const Amount = tempItems[index].amount;
    if (Amount + amount >= 1) {
      tempItems[index].amount += amount;
      setItems(tempItems);
    } else {
      removeItemFromCart(id);
    }
  }

  function addItemToCart(item) {
    // check item already exxit
    const isNewItem = items.every((currentItem) => currentItem.id !== item.id);

    if (isNewItem) {
      setItems((currentItems) => [...currentItems, item]);
    } else {
      updateItemAmount(item.id, item.amount);
    }
  }

  function removeItemFromCart(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id != id));
  }

  function order() {
    alert("Success! Order function will be implemented");
    setItems([]);
  }

  useEffect(() => {
    // update total amount every time items list change
    setTotalAmount(
      items.map((item) => item.price * item.amount).reduce((a, b) => a + b, 0)
    );
  }, [items]);

  return (
    <itemContext.Provider
      value={{
        items,
        totalAmount,
        addItemToCart,
        updateItemAmount,
        order,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}

export default ItemContextProvider;
