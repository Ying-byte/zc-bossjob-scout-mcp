#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "bossjob",
  boardId: "bossjob-official",
  domain: "t.me",
  npmName: "zc-bossjob-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
