import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test('The button renders', async () => {
    render(<Button variant="primary">Button</Button>);
    await waitFor(() => {
      expect(screen.getByTestId('button')).toBeDefined();
    });
  });

  test("The button is disabled", async() => {
    render(<Button variant="primary" disabled>Button</Button>);
    await waitFor(() => {
      expect(screen.getByTestId('button')).toBeDisabled();
    });
  });
});


