import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders", () => {
    render(<Application />);

    /** getByRole */
    const heading1 = screen.getByRole("heading", { level: 1 });
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByRole("heading", { level: 2 });
    expect(heading2).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByRole("textbox", { name: "Bio" });
    expect(nameElement2).toBeInTheDocument();

    const dropdown = screen.getByRole("combobox", { name: /job location/i });
    expect(dropdown).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to the terms and conditions/i,
    });
    expect(checkbox).toBeInTheDocument();

    const sunmitButton = screen.getByRole("button", { name: /submit/i });
    expect(sunmitButton).toBeInTheDocument();
    expect(sunmitButton).toBeDisabled();

    /** getByLabelText */
    const nameElement3 = screen.getByLabelText("Name");
    expect(nameElement3).toBeInTheDocument();
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */
    const nameEle = screen.getByPlaceholderText("Fullname");
    expect(nameEle).toBeInTheDocument();

    /** getByText */
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue("Hossen");
    expect(nameElement4).toBeInTheDocument();
    /** getByAltText */
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();
    /** getByTitle */
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();
    /** getByTestId */
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
