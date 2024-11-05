import type { Command } from "../types.d.tsx";
import { command as mainCommand } from "./commands/index.ts";

/**
 * Kind of like a router, getting the matching route for your.
 */
export const resolve = (path: string[]): Command | null => {
    let stack: Command[] = mainCommand.sub as Command[];
    let command: null | Command = null;

    path.forEach((target) => {
        const [found = null] = stack.filter(({ name }) => name === target);

        if (found) {
            found.parent = command ?? mainCommand;
            command = found;

            if (command.sub) {
                stack = command.sub;
            }
        } else {
            // Unknown command
            command = null;
        }
    });

    return command;
};
