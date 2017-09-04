exports.output = function(obj) {
    let buttonsBlock = document.getElementsByClassName("buttonsBlock")[0];
    buttonsBlock.addEventListener("click", setResult);

    function setResult(event) {

        let sign = event.target.getAttribute("class");
        let first = document.getElementsByClassName("firstInput")[0].value;
        let second = document.getElementsByClassName("secondInput")[0].value;
        let resBlock = document.getElementsByClassName("result")[0];
        let res = "= ";

        if (event.target.tagName !== "BUTTON") {
            return false;
        }

        event.stopPropagation();
        resBlock.textContent = "= ";

        if (first.includes(",") || second.includes(",")) {
            alert("Please use a dot sign instead of comma");
            return;
        } else if (isNaN(first) || isNaN(second) || first === "" || second === "") {
            alert("Entry must be a numbers");
            return;
        } else {
            first = parseFloat(first);
            second = parseFloat(second);
        }

        switch (sign) {
            case "plus":
                res = obj.add(first, second);
                break;
            case "minus":
                res = obj.subtract(first, second);
                break;
            case "multiple":
                res = obj.multiple(first, second);
                break;
            case "divide":
                if (second === 0) {
                    alert("You can't divide by zero");
                    return;
                }
                res = obj.divide(first, second);
                break;
            default:
                res = "";
                break;
        }
        resBlock.textContent += res;
    }
};
