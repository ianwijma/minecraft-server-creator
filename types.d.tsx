export type CommandAction = (args: Record<string, any>) => void | Promise<void>

export type Command = {
    name: string
    description: string
    example: string
    action?: CommandAction
    sub?: Command[]
}