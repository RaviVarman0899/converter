/*
    Author: Ravi Varman Ravichandran
    ID: C0885920
*/

function convert() {
    let usd = document.getElementById("USD").value;
    let usdOption = document.getElementById("usdCurrency").value;
    let cadOption = document.getElementById("cadCurrency").value;

    if (usd == null || usd == undefined || usd == "") {
        alert("The input value is empty, please provide a value to convert.")
    }
    else if (usdOption == "CAD") {
        document.getElementById("CAD").value = parseFloat(usd * 0.756);
    }
    else if (usdOption == "USD") {
        document.getElementById("CAD").value = parseFloat(usd * 1.322)
    }

}
