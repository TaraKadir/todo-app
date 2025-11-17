import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("tar bort en todo från listan", () => {
    render(<App />);

    // 1. Lägg till en todo vi ska ta bort
    const input = screen.getByPlaceholderText(/Lägg till en todo/i);
    const button = screen.getByText(/Lägg till/i);

    fireEvent.change(input, { target: { value: "Städa rummet" } });
    fireEvent.click(button);

    // 2. Kontroll – todo finns först
    const todoText = screen.getByText("Städa rummet");
    expect(todoText).toBeInTheDocument();

    // 3. Klicka på "Ta bort"-knappen
    const deleteButton = screen.getByText("Ta bort");
    fireEvent.click(deleteButton);

    // 4. Nu ska todo *inte* finnas längre
    expect(screen.queryByText("Städa rummet")).not.toBeInTheDocument();
  });
});
