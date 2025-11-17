// src/tests/App.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("visar rubriken 'Mina todos'", () => {
    render(<App />);

    const heading = screen.getByText(/Mina todos/i);

    expect(heading).toBeInTheDocument();
  });
});
