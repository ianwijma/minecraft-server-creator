import { parseArgs } from "jsr:@std/cli/parse-args";
import { resolveCommands } from "./resolveCommands.ts";

const {
    _: path,
    ...args
} = parseArgs(Deno.args);

const command = resolveCommands(path.map(p => p.toString()));

if (command?.action) {
    command?.action(args);
} else if (command) {
    console.dir('TODO: Write Help Printer', { command })
} else {
    console.dir('TODO: Write Generic Helper')
}
