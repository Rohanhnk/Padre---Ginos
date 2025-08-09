import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text nreders on image", async () => {
  const name = "my favourite pizza";
  const src = "https:pixsum.photo/200";
  const screen = render(
    <Pizza name={name} image={src} descroption="cool browser stuff" />,
  );

  const img = await screen.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
