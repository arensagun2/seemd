import { printOutput } from "../util/printOutput.js"

const parenthesis = ["(", ")"]
const operators = ["+", "-", "*", "/"]

export async function pemdas(whole, debug) {
    const wholeString = whole[0]
    const stringArray = wholeString.split("")

    let seperated = []
    let inside = false
    let currentParenthesis = ""
    let openParenthesisCount = 0

    debug ? console.log("Entries:", stringArray) : ""

    stringArray.forEach(s => {
        if (!inside && !isNaN(s)) {
            debug ? console.log(`${s} is a number`) : ""
            seperated.push(s)
        } else if (inside && !isNaN(s)) {
            currentParenthesis += s
        }

        if (!inside && operators.includes(s)) {
            debug ? console.log("out", `${s} is an operator`) : ""
            seperated.push(s)
        } else if (inside && operators.includes(s)) {
            currentParenthesis += s
        }

        if (parenthesis.includes(s)) {
            if (s == "(") {
                currentParenthesis += s
                inside = true
                openParenthesisCount += 1
            } else if (s == ")") {
                currentParenthesis += s
                openParenthesisCount -= 1
                console.log(currentParenthesis)

                if (openParenthesisCount <= 0) {
                    seperated.push(currentParenthesis)
                    inside = false
                    currentParenthesis = ""
                }
            }
        }
    })

    printOutput("out", seperated)
}