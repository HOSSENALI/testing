import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";
import { count } from "console";

describe("Counter", () => {
  test("Heading", () => {
    render(<Counter />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();

    const inputField = screen.getByRole("spinbutton");
    expect(inputField).toBeInTheDocument();

    const setButton = screen.getByRole("button", { name: "Set" });
    expect(setButton).toBeInTheDocument();
  });

  test("count value check", () => {
    render(<Counter />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toHaveTextContent("0");
  });
  test("increment button increasing", async () => {
    render(<Counter />);
    const increment = screen.getByRole("button", { name: "Increment" });
    await user.click(increment);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toHaveTextContent("1");
  });

  test("set button ", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const set = screen.getByRole("button", { name: "Set" });
    user.click(set);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toHaveTextContent("10");
  });

  test("set Name ", () => {
    render(<Counter />);
    const amountInput = screen.getByRole("textbox");
    user.type(amountInput, "Hossen");
    expect(amountInput).toHaveValue("Hossen");
    const set = screen.getByRole("button", { name: "SetName" });
    user.click(set);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toHaveTextContent("Hossen");
  });
});
