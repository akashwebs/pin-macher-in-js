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

// verify pin
function verifyPin() {
    const pinNumber = document.getElementById('pin-numbers').value;
    const typedNumber = document.getElementById('calc-input').value;
    if (pinNumber == typedNumber && pinNumber.length > 0) {
        document.getElementById('notify-success').style.display = "block"
        document.getElementById('notify-error').style.display = "none"
        alert('success fully pin matched');
    } else {
        document.getElementById('notify-error').style.display = "block"

        document.getElementById('notify-success').style.display = "none"
        alert('oopss!! pin didn"t match, please try again')

    }
}