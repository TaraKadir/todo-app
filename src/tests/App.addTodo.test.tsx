import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("lägger till en ny todo i listan", () => {
    render(<App />);

    // 1. Hämta input och knapp
    const input = screen.getByPlaceholderText(/Lägg till en todo/i);
    const button = screen.getByText(/Lägg till/i);

    // 2. Skriv text i input
    fireEvent.change(input, { target: { value: "Handla mat" } });

    // 3. Klicka på knappen
    fireEvent.click(button);

    // 4. Kontrollera att todo finns i dokumentet
    expect(screen.getByText("Handla mat")).toBeInTheDocument();
  });
});
