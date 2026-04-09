import { printOutput } from "../util/printOutput.js"
import { commands } from "../../commands.js";

export async function help(cmdName) {
    if (cmdName != "" && cmdName) {
        commands.forEach(cmd => {
            if (cmdName == cmd.commandName)
                printOutput("out", `${cmd.commandName} usage: ${cmd.usage} description: ${cmd.description}`);
        })
        return true;
    }

    printOutput("out", "Available commands:")
    commands.forEach(cmd => {
        printOutput("out", `| ${cmd.commandName} | usage: ${cmd.usage} | description: ${cmd.description} |`);
    })
}