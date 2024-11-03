import type { Command } from "../../../types.d.tsx";

export const InitVanillaCommand: Command = {
  name: "vanilla",
  description: "Initialises a Vanilla server",
  example: "init vanilla",
  action: (args) => {
    console.log('Initialize Vanilla: ', { args })
  }
}