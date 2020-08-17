import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test('renders the app component without errors', () => {
    render(<App />)
})

test("form header renders", () => {
    render(<App />)

    screen.getByText(/react plants/i)

});

test("form shows success message on submit with form details", () => {
render(<CheckoutForm/>)

    const submitButton = screen.getByText(/checkout/i)
    fireEvent.click(submitButton)
});
