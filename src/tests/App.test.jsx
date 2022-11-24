import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../App";

describe("App: Signup Form", () => {
    it("Should show signup form", () => {
        render(<App />);

        expect(screen.getByLabelText("Nome")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("Should show error message when fields is empty", async () => {
        render(<App />);

        const submitButton = screen.getByRole("button", { name: /submit/i });
        submitButton.click();

        expect(await screen.findByText("Name is required")).toBeInTheDocument();
        expect(await screen.findByText("Email is required")).toBeInTheDocument();
        expect(await screen.findByText("Password is required")).toBeInTheDocument();
    });

    it("Should show error message when email is invalid", async () => {
        render(<App />);

        fireEvent.input(screen.getByLabelText("Email"), {
            target: {
                value: "test",
            },
        });

        fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

        expect(
            await screen.findByText("Invalid email address"),
        ).toBeInTheDocument();
    });

    it("Should display min length error when password is invalid", async () => {
        render(<App />);

        fireEvent.input(screen.getByLabelText("Password"), {
            target: {
                value: "p10",
            },
        });

        fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

        expect(
            await screen.findByText("Password must be at least 8 characters"),
        ).toBeInTheDocument();
    });
});
