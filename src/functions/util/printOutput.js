const outputContainer = document.getElementById('output-container');

export async function printOutput(type, toPrint) {
    if (type == "input") {
        const newCommandContainer = document.createElement("div");
        newCommandContainer.className = "outputLine";

        const newCommandLine = document.createElement("p");
        newCommandLine.className = "outputText";
        newCommandLine.textContent = `> ${toPrint}`;

        newCommandContainer.appendChild(newCommandLine);
        outputContainer?.appendChild(newCommandContainer);
    } else {
        const newCommandContainer = document.createElement("div");
        newCommandContainer.className = "outputLine";

        const newCommandLine = document.createElement("p");
        newCommandLine.className = "outputText";
        newCommandLine.textContent = `${toPrint}`;

        newCommandContainer.appendChild(newCommandLine);
        outputContainer?.appendChild(newCommandContainer);
    }
}