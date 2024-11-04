import type { Command } from "../types.d.tsx";
import { command as mainCommand } from "./commands/index.ts";

export const resolve = (path: string[]): Command | null => {
    let stack: Command[] = (mainCommand.sub as Command[]);
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