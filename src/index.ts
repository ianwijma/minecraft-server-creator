import { parseArgs } from "jsr:@std/cli/parse-args";
import { resolve } from "./resolve.ts";
import { renderHelp } from "./renderHelp.ts";
import { command as mainCommand } from "./commands/index.ts";

const {
    _: path,
    help = false,
    ...args
} = parseArgs(Deno.args);

const pathString = path.map((p) => p.toString());
const command = resolve(pathString);

if (command) {
    if (help) {
        renderHelp({ command });
    } else if (command?.action) {
        command.action(args);
    } else {
        renderHelp({ command });
    }
} else {
    renderHelp({ command: mainCommand, unknown: true });
}
