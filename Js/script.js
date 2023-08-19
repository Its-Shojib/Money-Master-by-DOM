function getInput(inputId) {
    let inputField = document.getElementById(inputId);
    let inputString = inputField.value;
    let input = parseFloat(inputString);
    //    inputField.value = "";
    return input;
}
function getValue(inputId) {
    let valueField = document.getElementById(inputId);
    let valueString = valueField.innerText;
    let value = parseFloat(valueString);
    return value;
}
function setValue(money, ID) {
    let doc = document.getElementById(ID);
    doc.innerText = money;
}
function Clear() {
    document.getElementById("incomeInput").value = "";
    document.getElementById("foodInput").value = "";
    document.getElementById("rentInput").value = "";
    document.getElementById("clotheInput").value = "";
    document.getElementById("savingPercent").value = "";
}

document.getElementById("calculation").addEventListener("click", function () {
    let income = getInput("incomeInput");
    let food = getInput("foodInput");
    let rent = getInput("rentInput");
    let cloths = getInput("clotheInput");

    if (isNaN(income) == true || isNaN(food) == true || isNaN(rent) == true || isNaN(cloths) == true || income < 0 || rent < 0 || food < 0 || cloths < 0) {
        alert("Please Insert Valid Amount");
        Clear();
        return;
    }
    else {
        let totalExpances = food + rent + cloths;
        let Balance = income - totalExpances;
        if (totalExpances > income) {
            alert("Expances out of Income");
            Clear();
            return;
        }
        setValue(totalExpances, "totalExpances");
        setValue(Balance, "totalBalance");
    }

});

document.getElementById("saveBtn").addEventListener("click", function () {
    let income = getInput("incomeInput");
    let savingParcent = getInput("savingPercent");
    if (isNaN(income) == true || isNaN(savingParcent) == true) {
        alert("Please Insert Valid Amount");
        Clear();
        return;
    }
    else {
        let balance = getValue("totalBalance");
        if(balance == 0){
            alert("Your balance is Zero");
            setValue("00", "savingAmount");
            setValue("00", "remainingBalance");
            Clear();
            return;
        }
        let saving = (income / 100) * savingParcent;
        let remaining = balance - saving;

        setValue(saving, "savingAmount");
        setValue(remaining, "remainingBalance");
        Clear();
    }
});