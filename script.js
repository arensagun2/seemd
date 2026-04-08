import { getCommand } from "./src/getCommand.js";
import { printOutput } from "./src/functions/util/printOutput.js";

// debug = true/false
const debug = true;
const inputForm = document.getElementById('inputEntered');

if (debug)
    console.log(inputForm ? "Found inputForm ID" : "Error: inputForm not found");

inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(inputForm);
    const command = formData.get("command");

    debug ? console.log("Form submitted. User sent:", command) : "";

    printOutput("input", command?.toString())
    await getCommand(command?.toString(), debug);
    
    inputForm.reset();
});
