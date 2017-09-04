exports.renderInterface = function() {
    let mapOfSigns = ["+", "-", "&times;", "&divide;"];
    let mapOfClass = ["plus", "minus", "multiple", "divide"];
    let container = document.getElementById("container");
    let firstInput = document.createElement("input");
    let secondInput = document.createElement("input");
    let buttonsBlock = document.createElement("div");
    let form = document.createElement("form");
    let result = document.createElement("div");

    buttonsBlock.classList.add("buttonsBlock");
    result.classList.add("result");
    result.textContent = "= ";
    firstInput.setAttribute("type", "text");
    firstInput.classList.add("firstInput");
    secondInput.setAttribute("type", "text");
    secondInput.classList.add("secondInput");
    form.appendChild(firstInput);
    form.appendChild(secondInput);
    container.appendChild(form);

    for (let i = 0; i < mapOfSigns.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerHTML = mapOfSigns[i];
        button.classList.add(mapOfClass[i]);
        buttonsBlock.appendChild(button);
    }
    container.appendChild(buttonsBlock);
    container.appendChild(result);
};
