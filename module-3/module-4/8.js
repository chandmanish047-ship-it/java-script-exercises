const button = document.querySelector("button");
button.addEventListener("click", function() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    if (operation === "add") {
        result = num1 + num2;
    }
    else if (operation === "subtract") {
        result = num1 - num2;
    }
    else if (operation === "multiply") {
        result = num1 * num2;
    }
    else if (operation === "divide") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }
    document.getElementById("result").textContent = result;
});
