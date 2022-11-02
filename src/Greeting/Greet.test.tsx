import { render, screen } from '@testing-library/react'
import { Greet } from "./Greet";

describe("Render Greeting", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const test=screen.getByText(/Hello/i);
    expect(test).toBeInTheDocument();
  });
  test('renders a name', () => {
    render(<Greet name="Vishwas" />)
    const textElement = screen.getByText('Hello Vishwas')
    expect(textElement).toBeInTheDocument()
  })
});
