const button = document.querySelector("button");
button.addEventListener("click", function() {
    const input = document.getElementById("calculation").value;

    let result;

    if (input.includes("+")) {
        const numbers = input.split("+");
        result = Number(numbers[0]) + Number(numbers[1]);
    }
    else if (input.includes("-")) {
        const numbers = input.split("-");
        result = Number(numbers[0]) - Number(numbers[1]);
    }
    else if (input.includes("*")) {
        const numbers = input.split("*");
        result = Number(numbers[0]) * Number(numbers[1]);
    }
    else if (input.includes("/")) {
        const numbers = input.split("/");
        result = Number(numbers[1]) !== 0
            ? Number(numbers[0]) / Number(numbers[1])
            : "Cannot divide by zero";
    }
    else {
        result = "Invalid calculation";
    }
    document.getElementById("result").textContent = result;
});
