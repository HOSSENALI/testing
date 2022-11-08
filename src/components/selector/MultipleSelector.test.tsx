import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MySelector } from "./MultipleSelector";
describe("Selector", () => {
  //   test("heading text", () => {
  //     render(<MySelector />);
  //     const text = screen.getByText(/Your favorite country is/i);
  //     expect(text).toBeInTheDocument();
  //   });

  test("checks value changes when user chooses a new size", () => {
    render(<MySelector />);
    screen.debug();
    const selectSizeAndShowSelectedSize = screen.getByRole("combobox");
    expect(selectSizeAndShowSelectedSize).toHaveTextContent("Red");
    userEvent.selectOptions(selectSizeAndShowSelectedSize, "Green");
    expect(selectSizeAndShowSelectedSize).toHaveValue("Green");
    screen.debug();
  });
  test("Test with fireEvent", () => {
    render(<MySelector />);
    expect(screen.getByText("Your favorite color is")).toBeInTheDocument();
    // highlight-start
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "Green" },
    });
    // highlight-end
    expect(screen.getByText("Your favorite color is Green")).toBeInTheDocument();
  });
});

