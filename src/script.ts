// debug = true/false
const debug = true;
const inputForm = document.getElementById('inputEntered') as HTMLFormElement;
const outputContainer = document.getElementById('output-container');

if (debug)
    console.log(inputForm ? "Found inputForm ID" : "Error: inputForm not found");

inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(inputForm);
    const command = formData.get("command");

    debug ? console.log("Form submitted. Command sent:", command) : "";

    const newCommandContainer = document.createElement("div");
    newCommandContainer.className = "outputLine"

    const newCommandLine = document.createElement("p");
    newCommandLine.className = "outputText"
    newCommandLine.textContent = `> ${command?.toString()}`;

    newCommandContainer.appendChild(newCommandLine)
    outputContainer?.appendChild(newCommandContainer)
    newCommandContainer.focus();

    inputForm.reset();
});
