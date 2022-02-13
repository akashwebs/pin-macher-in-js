function rendomNumber() {
    const number = Math.round(Math.random() * 10000)
    if ((number + '').length == 4) {

        return number;
    } else {
        return rendomNumber()
    }
}

function genaratePin() {
    const pin = rendomNumber();
    document.getElementById('pin-numbers').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(e) {
    const calcNumbers = document.getElementById("calc-input");

    const key = e.target.innerText;
    if (isNaN(key)) {
        if (key == "C") {
            calcNumbers.value = '';
        }
    } else {

        calcNumbers.value += key;
    }
})