let seconds = 60
let correct;
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

function getRandomFootballer() {
    return footballers[Math.floor(Math.random()*(footballers.length - 1))]
}
function main() {
    let options = [];
    const max0ptions = 3;
    while (options.length < max0ptions) {
        let coun = getRandomFootballer();
        if (options.indexOf(coun) === -1) {
            options.push(coun)
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))]
    getElement("footballer").src = correct.footballer
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectanswer++
    }
    main();
}
function finish() {
    clearInterval(checkInterval);
    getElement("alert").style.display = "block";
  getElement("card").style.display = "none";
  getElement("alertscore").innerHTML = correctAnswer;
    let percentage = Math.round((correctAnswer / (correctAnswer + incorrectanswer)) * 100);
    if (isNaN(percentage)) {
        resultForAnswers = 100;
    } else {
        if (percentage >= 75 && percentage < 95) {
            resultForAnswers = "Դուք ցուցաբերել եք լավ արդյունք"
        } else if (percentage >= 95) {
            resultForAnswers = "Դուք ցուցաբերել եք գերազանց արդյունք"
        }else if (percentage <=75){
            resultForAnswers = "Դուք ցուցաբերել եք վատ արդյունք"
        }
    }
    getElement("alertaccuracy").innerHTML = `${resultForAnswers}%  `;
}
function refresh() {
    location = location;
}
let checkInterval = setInterval(check, 50);
timer();
main();