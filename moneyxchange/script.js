
const currency1 = document.getElementById("currency01");
const currency2 = document.getElementById("currency02");

const amount = document.getElementById("amountMoney");

function convertMoney() {

    const money1 = currency1.value;
    const money2 = currency2.value;

    fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${money1}`)
        .then(res => res.json()).then(data => {
            // console.log(data.conversion_rates[money2]);
            const rate = data.conversion_rates[money2];

            const convert = (amount.value * rate);
            // console.log(convert)

            document.getElementById("amount").innerHTML = "";
            document.getElementById("result").innerHTML = "";
            document.getElementById("amount").innerHTML += " : " + amount.value
            document.getElementById("result").innerHTML += " Result : " + convert

            if( amount.value > 0) {
            var row = tbHistory.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
    
            cell1.innerHTML = currency1.value;
            cell2.innerHTML = amount.value;
            cell3.innerHTML = currency2.value;
            cell4.innerHTML = rate;
            cell5.innerHTML = convert;
            }
            else if(amount.value <= 0){
                window.alert("Please atleast put some amount!")
                document.getElementById("amount").innerHTML = "";
                document.getElementById("result").innerHTML = "";
            }
            else{
                console.log("Error")
                document.getElementById("amount").innerHTML = "Error";
                document.getElementById("result").innerHTML = "Error";
            }
        }).catch((err) =>console.error(err));
}

function btnSwap() {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
}

function loadDataToTable(){

    document.getElementById("tbRate").innerHTML = "";

    fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD`).then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    // console.log(objectData.conversion_rates);
    Object.keys(objectData.conversion_rates).forEach(function (key) {
        // console.log('Key : ' + key + ', Value : ' + objectData.conversion_rates[key])
        var row = tbRate.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = key;
        cell2.innerHTML = objectData.conversion_rates[key];
    })
})

}




