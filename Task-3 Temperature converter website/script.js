function updateToUnits() {

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit");

    const current = toUnit.value;

    toUnit.innerHTML = "";

    const units = [
        { value: "C", label: "°C" },
        { value: "F", label: "°F" },
        { value: "K", label: "K" }
    ];

    units.forEach(unit => {

        if (unit.value !== fromUnit) {

            const option = document.createElement("option");

            option.value = unit.value;
            option.textContent = unit.label;

            toUnit.appendChild(option);

        }

    });

    if ([...toUnit.options].some(opt => opt.value === current)) {
        toUnit.value = current;
    } else {
        toUnit.value = toUnit.options[0].value;
    }

}

function swapUnits() {

    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");

    from.value = to.value;

    updateToUnits();

    if (document.getElementById("tempInput").value !== "") {
        convertTemperature();
    }

}

function convertTemperature() {

    const input = document.getElementById("tempInput");

    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    errorDiv.classList.add("hidden");

    const temp = parseFloat(input.value);

    if (isNaN(temp)) {

        errorDiv.textContent = "Please enter a valid number";
        errorDiv.classList.remove("hidden");
        resultDiv.classList.add("hidden");
        return;

    }

    let celsius;

    if (from === "C") {

        celsius = temp;

    } else if (from === "F") {

        celsius = (temp - 32) * 5 / 9;

    } else {

        celsius = temp - 273.15;

    }

    let converted;

    if (to === "C") {

        converted = celsius;

    } else if (to === "F") {

        converted = celsius * 9 / 5 + 32;

    } else {

        converted = celsius + 273.15;

    }

    let display = converted.toFixed(2);
    display = parseFloat(display).toString();

    document.getElementById("resultValue").textContent = display;

    let symbol = "";

    if (to === "C") {
        symbol = "°C";
    } else if (to === "F") {
        symbol = "°F";
    } else {
        symbol = "K";
    }

    document.getElementById("resultUnit").textContent = symbol;

    resultDiv.classList.remove("hidden");

    resultDiv.style.transform = "scale(0.95)";

    setTimeout(() => {

        resultDiv.style.transform = "scale(1)";

    }, 10);

}

window.onload = () => {

    updateToUnits();

    document.getElementById("tempInput").addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            convertTemperature();
        }

    });

};
