import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);

  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByRole("button");

  userEvent.type(firstNameInput, "Josh");
  userEvent.type(lastNameInput, "Scanlan");
  userEvent.type(addressInput, "123 Test Street");
  userEvent.type(cityInput, "Faketown");
  userEvent.type(stateInput, "CA");
  userEvent.type(zipInput, "54321");
  userEvent.click(checkoutButton);

  const successMessage = screen.getByTestId(/successmessage/i);
  expect(successMessage).toBeInTheDocument();
  expect(successMessage).toHaveTextContent(firstNameInput.value);
  expect(successMessage).toHaveTextContent(lastNameInput.value);
  expect(successMessage).toHaveTextContent(addressInput.value);
  expect(successMessage).toHaveTextContent(cityInput.value);
  expect(successMessage).toHaveTextContent(stateInput.value);
  expect(successMessage).toHaveTextContent(zipInput.value);
});
