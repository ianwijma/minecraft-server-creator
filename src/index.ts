import { parseArgs } from "jsr:@std/cli/parse-args";
import { resolve } from "./resolve.ts";

const {
    _: path,
    ...args
} = parseArgs(Deno.args);

const pathString = path.map(p => p.toString());
const command = resolve(pathString);

if (command?.action) {
    command?.action(args);
} else if (command) {
    console.dir('TODO: Write Help Printer', { command })
} else {
    console.dir('TODO: Write Generic Helper')
}
