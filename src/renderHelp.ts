import type { Command } from "../types.d.tsx";
import denoFile from "../deno.json" with { type: "json" };
import { command as mainCommand } from "./commands/index.ts";

const getFullCommand = (command: Command): string => {
    let fullCommand = [command.name];
    let { parent } = command;

    while (parent) {
        fullCommand = [parent.name, ...fullCommand];

        parent = parent.parent;
    }

    return fullCommand.join(" ");
};

type RenderHelpParams = {
    command: Command;
    unknown?: boolean;
};

export const renderHelp = (
    { command, unknown = false }: RenderHelpParams,
): void => {
    const { description, example, sub = [] } = command;
    const { name: mainName } = mainCommand;
    const fullCommand = getFullCommand(command);
    const hasSub = sub.length > 0;

    const unknownText = unknown
        ? `Unknown command

`
        : "";

    console.log(
        `${unknownText}${fullCommand} ${hasSub ? "<command>" : ""}${
            description
                ? `
${description}`
                : ""
        }

Usage:
${name === mainName ? "" : mainName} ${example}
${
            hasSub
                ? `
All commands:
${
                    sub.map(({ example, description }) =>
                        `${
                            name === mainName
                                ? ""
                                : mainName
                        } ${example}\t- ${description}\n`
                    )
                }`
                : ""
        }
${mainName} ${denoFile.version}
`,
    );
};
