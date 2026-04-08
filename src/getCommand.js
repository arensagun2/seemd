import { printOutput } from "./functions/util/printOutput.js";
import { addition, division, multiplication, subtraction } from "./functions/math/basics.js";
import { help } from "./functions/helpers/help.js";

export async function getCommand(cmdLine, debug) {
    if (cmdLine == undefined || cmdLine == "" || cmdLine.length <= 0)
        return debug ? console.log("Command line is empty") : null;

    const wholeLine = cmdLine.split(" ");
    const command = wholeLine[0];
    const parameters = wholeLine.slice(1);

    if (debug) {
        console.log("Command", command);
        console.log("Parameters", parameters);
    }

    switch (command) {
        case "add":
            await addition(parameters, debug)
            break;
        case "sub":
            await subtraction(parameters, debug)
            break;
        case "mul":
            await multiplication(parameters, debug)
            break;
        case "div":
            await division(parameters, debug)
            break;
        case "help":
            await help(parameters[0]);
            break;
        default:
            printOutput("out", `Command '${command}' not found`)
            break;
    }

    return false;
};