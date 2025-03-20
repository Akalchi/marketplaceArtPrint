import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import Navbar from "./NavBar";

describe("Navbar", () => {
  const TestComponent = () => {
    const location = useLocation();
    return (
      <>
        <div data-testid="location-display">{location.pathname}</div>
        <Navbar />
      </>
    );
  };

  it("debería navegar al login cuando se hace clic en el botón de inicio de sesión", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TestComponent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Iniciar sesión"));
    expect(screen.getByTestId("location-display")).toHaveTextContent("/login");
  });

  it("debería navegar a inicio cuando se hace clic en el logo", () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <TestComponent />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Inicio"));
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});
