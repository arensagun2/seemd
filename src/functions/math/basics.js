import { printOutput } from "../util/printOutput.js";

export async function addition(values, debug) {
    if (values.length < 2) {
        printOutput("out", "Add requires two or more values.")
        if (debug) 
            console.error("Wrong usage for add command")
        return false;
    }

    if (debug) console.log("Function 'add' starting");

    let sum = 0;
    values.forEach((val) => {
        if (debug) console.log(`Adding ${sum} and ${val}`);
        sum += Number(val)
    });

    printOutput("out", `Total: ${sum.toString()}`);
    return true;
}

export async function subtraction(values, debug) {
    if (values.length < 2) {
        printOutput("out", "Add requires two or more values.")
        if (debug) 
            console.error("Wrong usage for add command")
        return false;
    }

    if (debug) console.log("Function 'add' starting");

    let difference = 0;
    let i = 0;
    values.forEach((val) => {
        if (debug) console.log(`Adding ${difference} and ${val}`);
        if (i <= 0) {
            difference = val
            i++;
        } else
            difference -= Number(val)
    });

    printOutput("out", `Total: ${difference.toString()}`);
    return true;
}

export async function multiplication(values, debug) {
    if (values.length < 2) {
        printOutput("out", "Add requires two or more values.")
        if (debug) 
            console.error("Wrong usage for add command")
        return false;
    }

    if (debug) console.log("Function 'add' starting");

    let product = 0;
    let i = 0;
    values.forEach((val) => {
        if (debug) console.log(`Adding ${product} and ${val}`);
        if (i <= 0) {
            product = val
            i++;
        } else
            product *= Number(val)
    });

    printOutput("out", `Total: ${product.toString()}`);
    return true;
}

export async function division(values, debug) {
    if (values.length < 2) {
        printOutput("out", "Add requires two or more values.")
        if (debug) 
            console.error("Wrong usage for add command")
        return false;
    }

    if (debug) console.log("Function 'add' starting");

    let quotient = 0;
    let i = 0;
    values.forEach((val) => {
        if (debug) console.log(`Adding ${quotient} and ${val}`);
        if (i <= 0) {
            quotient = val
            i++;
        } else
            quotient /= Number(val)
    });

    printOutput("out", `Total: ${quotient.toString()}`);
    return true;
}