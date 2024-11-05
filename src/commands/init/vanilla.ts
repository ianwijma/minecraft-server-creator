import type { Command } from "../../../types.d.tsx";

export const InitVanillaCommand: Command = {
  name: "vanilla",
  description: "Initialises a Vanilla server",
  example: "init vanilla --version 1.21.0",
  action: (args) => {
    console.log("Initialize Vanilla: ", { args });
  },
};
