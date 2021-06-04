import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [
  {
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    name: "Peperomia Rosso",
    price: 21,
    id: 125341,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    name: "String of Dolphins",
    price: 15,
    id: 125344,
  },
];

test("displays plants in cart", () => {
  render(<ShoppingCart cart={plants} />);
  const plantCards = screen.queryAllByTestId("plantCard");
  const peperomiaRosso = screen.queryByText(/peperomia rosso/i);
  const stringOfDolphins = screen.queryByText(/string of dolphins/i);

  expect(plantCards.length).toBe(2);
  expect(peperomiaRosso).toBeInTheDocument();
  expect(peperomiaRosso).toHaveTextContent(/peperomia rosso/i);
  expect(stringOfDolphins).toBeInTheDocument();
  expect(stringOfDolphins).toHaveTextContent(/string of dolphins/i);
});
