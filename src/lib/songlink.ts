import axios from "axios";
import ExpiryMap from "expiry-map";
import pMemoize from "p-memoize";
import * as Time from "@std/datetime/constants";
import z from "zod/v4";

const httpUrl = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.domain,
});

const Links = z.object({
  pageUrl: httpUrl,
});

async function _tryResolveSongLink(url: string): Promise<string | undefined> {
  if (httpUrl.safeParse(url).error) return;

  const resp = await axios.get("https://api.song.link/v1-alpha.1/links", {
    params: { url },
    validateStatus(status) {
      return (status >= 200 && status < 300) || status == 400;
    },
  });
  if (resp.status == 400) return;

  return Links.parse(resp.data).pageUrl;
}
export const tryResolveSongLink = pMemoize(_tryResolveSongLink, {
  cache: new ExpiryMap(Time.HOUR),
});
