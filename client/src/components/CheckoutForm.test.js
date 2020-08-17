import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders the app component without errors", () => {
	render(<App />);
});

test("form header renders", () => {
	render(<App />);

	screen.getByText(/react plants/i);
});

test("form shows success message on submit with form details", () => {
	render(<CheckoutForm />);

	const firstNameInput = screen.getByLabelText(/first Name:/i);
    const lastNameInput = screen.getByLabelText(/last Name:/i);
    const addyInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    userEvent.type(firstNameInput, 'Rob');
	userEvent.type(lastNameInput, "Lark");
	userEvent.type(addyInput,"2452 Montebello Way");
	userEvent.type(cityInput, "Lodi");
	userEvent.type(stateInput, "CA");
    userEvent.type(zipInput, "95240");

	const submitButton = screen.getByRole("button")
	userEvent.click(submitButton)

    const success = screen.getByText(/Woo-hoo!/i);
});
