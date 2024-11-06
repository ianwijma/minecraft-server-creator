import type { Command } from "../../types.d.tsx";
import { InitCommand } from "./init/index.ts";

export const EntryCommand: Command = {
  name: "msc",
  description: "Minecraft Server Creator",
  example: "msc --help",
  sub: [InitCommand],
};
