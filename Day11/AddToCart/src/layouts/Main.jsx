import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Backdrop from "../components/Backdrop";

function Main() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCart = () => setIsShowCart(true);
  const hideCart = () => setIsShowCart(false);

  return (
    <div className="main">
      <Header {...{ showCart }} />
      <Body />
      {isShowCart && <Backdrop {...{ hideCart }} />}
    </div>
  );
}

export default Main;
