import * as z from "zod";

export const AnyConfig = z.object({ _VERSION: z.number() });
import Config, { OtherConfig, ButtonType, Provider } from "./V9.ts";
export const Migrations = [
  await import("./V1.ts"),
  await import("./V2.ts"),
  await import("./V3.ts"),
  await import("./V4.ts"),
  await import("./V5.ts"),
  await import("./V6.ts"),
  await import("./V7.ts"),
  await import("./V8.ts"),
];

export { Config, OtherConfig, ButtonType, Provider };
export type Config = z.infer<typeof Config>;
export type OtherConfig = z.infer<typeof OtherConfig>;
