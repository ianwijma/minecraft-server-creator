import type { Command } from "../types.d.tsx";
import { commands } from "./commands/index.ts";

export const resolveCommands = (path: string[]): Command | null => {
    let stack = commands;
    let command: null | Command = null;

    path.forEach(target => {
       const [ found = null ] = stack.filter(({ name }) => name === target); 
       
       if (found) {
        command = found;

        if (command.sub) {
            stack = command.sub
        }
       }
    })

    return command;
} 