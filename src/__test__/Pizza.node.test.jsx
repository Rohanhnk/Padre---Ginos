import { render, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favourtie Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="spuer cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name={"Something else"} description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
