import { expect, test } from "bun:test";
import { YAML } from "bun";
import { Config } from "./const.ts";
import parseTemplate from "./template.ts";
import example from "./example.yml";
import * as z from "zod";

test("example generated", async () => {
  const exampleFile = await Bun.file("config.example.yml").text();
  const expected = await parseTemplate(example);
  expect(exampleFile).toBe(expected);
});

test("example matches config", async () => {
  const example = z
    .record(z.string(), z.unknown())
    .parse(YAML.parse(await Bun.file("config.example.yml").text()));
  example.username = "example";
  expect(Config.parse(example)).toBeTruthy();
});
