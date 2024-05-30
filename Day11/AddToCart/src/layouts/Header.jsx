import Nav from "../components/Nav";
import Summary from "../components/Summary";

function Header({ showCart }) {
  return (
    <>
      <Nav {...{ showCart }} />
      <Summary />
    </>
  );
}

export default Header;
