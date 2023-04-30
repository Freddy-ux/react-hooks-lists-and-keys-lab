import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const { getAllByRole } = render(<NavBar />);
  const links = getAllByRole("link");

  const keys = links.map((link) => link.key);
  const uniqueKeys = new Set(keys);

  expect(uniqueKeys.size).toBe(keys.length);
});


test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i)).toBeInTheDocument();
  expect(screen.queryByText(/about/i)).toBeInTheDocument();
  expect(screen.queryByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i).href).toContain("#home");
  expect(screen.queryByText(/about/i).href).toContain("#about");
  expect(screen.queryByText(/projects/i).href).toContain("#projects");
});
