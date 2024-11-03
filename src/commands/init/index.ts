import type { Command } from "../../../types.d.tsx";
import { InitVanillaCommand } from "./vanilla.ts";

export const InitCommand: Command = {
  name: "init",
  description: "Initialises an empty server instance",
  example: "",
  sub: [InitVanillaCommand]
}