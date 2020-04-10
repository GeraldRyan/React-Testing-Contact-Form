import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () =>
{
  render(<App />);
});

test("contact form without crashing", () =>
{
  //Arrange
  const { getByLabelText, getByTestID } = render(<ContactForm />)
  //Act
  const firstNameInput = getByLabelText(/First Name/i)
  const lastNameInput = getByLabelText(/Last Name/i)
  const emailInput = getByLabelText(/email/i)
  const messageInput = getByLabelText(/Message/i)
  expect(firstNameInput).toBeVisible()
  expect(firstNameInput).toBeVisible()
  expect(firstNameInput).toBeVisible()
  //Assert
})

test("Can type in fields", () =>
{
  //Arrange
  const { getByLabelText, getByTestId } = render(<ContactForm />)
  //Act
  const firstNameField = getByLabelText(/First Name/i)
  fireEvent.change(firstNameField, { target: { value: "Benjamin" } })
  //Assert
  expect(firstNameField.value).toBe("Benjamin")
  // expect(firstNameField).toBeVisible()
  fireEvent.click(firstNameField)
  fireEvent.click(getByTestId(/Submit/i))
})

// test("Max length is sufficient", () =>
// {
//   //arrange
//   const { getByLabelText, getByTestId } = render(<ContactForm />)
//   const firstNameField = getByLabelText(/First Name/i)

//   //act
//   //assert 
// })