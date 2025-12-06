import * as z from "zod";

import { Provider, OtherConfig, ButtonType } from "./V8.ts";
export { Provider, OtherConfig, ButtonType };

export const check = z.object({ _VERSION: z.literal(9) });
export const ConfigV9 = z.object({
  _VERSION: z.literal(9),

  provider: Provider,
  username: z.string(),

  smallImage: z.enum(["logo", "profile", "none"]).default("none"),

  showElapsedTime: z.boolean().default(false),
  showRemainingTime: z.boolean().default(false),

  button1: ButtonType.default("none"),
  button2: ButtonType.default("none"),

  nintendoMusic: z
    .object({
      useSongArt: z.boolean().default(false),
      formatSplatoonArtist: z.boolean().default(false),
    })
    .prefault({}),

  disableOnPresence: OtherConfig.prefault({}),

  lastFmApiKey: z.string().optional(),
  discordClientId: z.string().optional(),
  listenBrainzAPIURL: z.string().optional(),
});
export default ConfigV9;
