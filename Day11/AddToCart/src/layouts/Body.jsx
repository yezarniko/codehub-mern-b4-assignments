import React from "react";
import Card from "../components/Card";

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

function Body() {
  return (
    <>
      {fruits.map((fruit) => (
        <Card key={fruit.id} product={fruit} />
      ))}
    </>
  );
}

export default Body;
