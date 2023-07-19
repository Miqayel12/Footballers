let seconds = 60
let correctAnswer = 0
let incorrectanswer = 0
function getElement(id) {
    return document.getElementById(id);
}

function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        if (seconds === 40) {
            getElement("time").style.color = "yellow";
        }
        if (seconds === 20) {
            getElement('time').style.color = "orange";
        }
        if (seconds === 10) {
            getElement('time').style.color = "red";
        }
    }, 1000)
}




function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === "Մեսսի") {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectanswer++
    }
    clearInterval(checkInterval);
}
function finish() {
    clearInterval(checkInterval);
    let percentage = (correctAnswer / (correctAnswer + incorrectanswer)) * 100;
    getElement("alertaccuracy").innerHTML = `քո արդյունքն է ${percentage}%`;
}
let checkInterval = setInterval(check, 50);
timer();