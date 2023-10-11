import { render, screen } from "@testing-library/react";
import ClientesPage from "../../page/ClientesPage";
import '@testing-library/jest-dom'

jest.mock("../../hooks/useClientes", () => ({
  useClientes:() => ({
    date: "2023-10-11", // Proporciona una fecha de ejemplo
    setDate: () => {}, // Función vacía de ejemplo
    clientesQuery: {
      isLoading: false,
      isFetching: false,
      error: null,
      data: [], // Datos de ejemplo
    },
  }),
}));

describe("ClientesPage Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("renders without errors", () => {
    render(<ClientesPage />);
  });

  it("displays the title", () => {
    render(<ClientesPage />);
    const titleElement = screen.getByText("Clientes");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders DateRangePickerSpanish component", () => {
    render(<ClientesPage />);
    const dateRangePicker = screen.getByTestId("date-range-picker");
    expect(dateRangePicker).toBeInTheDocument();
  });

  it("renders Select component", () => {
    render(<ClientesPage />);
    const selectElement = screen.getByTestId("select-filter");
    expect(selectElement).toBeInTheDocument();
  });
  

});
