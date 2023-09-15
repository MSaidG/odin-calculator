function add(num1, num2) {

    return num1 + num2;
}

function substract(num1, num2) {

    return num1 - num2;
}

function divide(num1, num2) {

    if (num2 === 0) return 0;

    return num1 / num2;
}

function multiply(num1, num2) {

    return num1 * num2;
}

let one = "";
let op = "";
let two = "";
let res = "";
let str;

function operate(num1, num2, operator)
{
    num1 = +num1;
    num2 = +num2;
    let result = 0;
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = substract(num1, num2);
    if (operator === "*") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);

    return result;
}


const buttons = document.querySelectorAll("button");
const display = document.querySelector("p");

buttons.forEach( button => {

    button.addEventListener("click", e => {

        str = e.target.textContent;
        calculate(str);

    });
});


document.addEventListener("keydown", e => {

    e.preventDefault();
    str = e.key;
    console.log(str);

    calculate(str);


    //if (str === "1" 
    //|| str === "2"
    //|| str === "3"
    //|| str === "4"
    //|| str === "5"
    //|| str === "6"
    //|| str === "7"
    //|| str === "8"
    //|| str === "9"
    //|| str === "-"
    //|| str === "+"
    //|| str === "/"
    //|| str === "*"
    //|| str === "."
    //|| str === "0"
    //|| str === "Enter"
    //|| str === "Backspace"
    //|| str == "Escape") 
    //{
    //}
//

});

function calculate(str)
{
    if (op === "" 
    && two === ""
    && (!isNaN(+str) || str === ".") 
    && str !== " ")
    {
        if (one.includes(".") && str === ".") return;
        one += str;
        console.log(`one: ${+str}`);
    }
    else if (one !== "" 
    && (str == "-"
    || str == "+"
    || str == "/"
    || str == "*"))
    {
        op = str;
        console.log(`op: ${str}`);
    }
    else if (one !== "" 
    && op !== "" 
    && (!isNaN(+str) || str === ".") 
    && str !== " ")
    {
        if (two.includes(".") && str === ".") return;
        two += str;
        console.log(`twwo: ${+str}`);
    }
    else if (one !== ""
    && two !== ""
    && op !== ""
    && (str === "operator" || str === "=" || str === "Enter"))
    {
        let result = operate(one, two, op);
        if (!Number.isInteger(result))
        {
            one = result.toFixed(1);
            two = "";
            op = "";
            console.log(typeof result);
        }
        else 
        {
            one = result.toString();
            two = "";
            op = "";
        }
        
    }

    if (str === "<-" || str === "Backspace")
    {
        if (two !== "")
        {
            two = two.substring(0, two.length-1);
        }
        else if (op !== "")
        {
            op = op.substring(0, op.length-1);
        }
        else if (one !== "")
        {
            if (typeof one === "number")
            {

            }
            one = one.substring(0, one.length-1);
        }

    }

    let display_str = `${one} ${op} ${two}`;
    display.textContent = display_str;

    if (str === "AC" || str === "Escape")
    {
        one = "";
        op = "";
        two = "";
        res = "";
        display_str = `${one} ${op} ${two}`;
        display.textContent = display_str;

    }
}