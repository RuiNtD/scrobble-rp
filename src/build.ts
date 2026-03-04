const targets: Partial<Record<Bun.Build.CompileTarget, string>> = {
  "bun-windows-x64": "windows-x64",
  "bun-windows-arm64": "windows-arm64",
  "bun-darwin-x64": "macos-x64",
  "bun-darwin-arm64": "macos-arm64",
  "bun-linux-x64": "linux-x64",
  "bun-linux-arm64": "linux-arm64",
};

for (const [target, suffix] of Object.entries(targets) as [
  Bun.Build.CompileTarget,
  string,
][]) {
  await Bun.build({
    entrypoints: ["./src/index.ts"],
    compile: {
      target,
      outfile: `./out/ScrobbleRP-${suffix}`,
    },
    minify: true,
  });
}
