import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
  render(<App />);
});

test("contact form without crashing", () =>{
  //Arrange
  const { getByLabelText } = render(<ContactForm />)
  //Act
  const firstNameInput = getByLabelText(/First Name/i)
  // const lastNameInput = getByLabelText(/Last Name/i)
  // const emailInput = getByLabelText(/email/i)
  // const messageInput = getByLabelText(/Message/i)
  //Assert
  expect(firstNameInput).toBeVisible()
  expect(firstNameInput).toBeVisible()
  expect(firstNameInput).toBeVisible()

})

test("Can type in fields", () =>{
  //Arrange
  const { getByLabelText } = render(<ContactForm />)
  //Act
  const firstNameField = getByLabelText(/First Name/i)
  fireEvent.change(firstNameField, { target: { value: "Benjamin"} })
  //Assert
  expect(firstNameField.value).toBe("Benjamin")
  // expect(firstNameField).toBeVisible()
  const submit = getByTestId(/Submit/i)
  fireEvent.click(submit)
})