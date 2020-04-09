import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
  render(<App />);
});

test("renders contact form without crashing", () =>{

  //Arrange
  const { getByText } = render(<ContactForm />)
  //Act
  const firstName = getByText(/First Name/i)
  //Assert
  expect(firstName).toBeInTheDocument()
})