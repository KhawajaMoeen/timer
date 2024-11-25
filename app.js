let hrTime = document.getElementById("hrTime")
let minTime = document.getElementById("minTime")
let secTime = document.getElementById("secTime")
let mSecTime = document.getElementById("mSecTime")

let hrInp = document.getElementById("hrInp")
let minInp = document.getElementById("minInp")
let secInp = document.getElementById("secInp")

let inp = document.getElementById("inp")
let btn = document.getElementById("btn")

let hr;
let min;
let sec;
let timeInterval;
let mSec = 0

function setTimeBtn() {
    console.log(btn, inp);
    inp.style.display = "flex"
    btn.style.display = "none"
}



function userInput() {
    hrTime.innerHTML = hrInp.value
    minTime.innerHTML = minInp.value
    secTime.innerHTML = secInp.value
    hr = hrInp.value
    min = minInp.value
    sec = secInp.value
    return
}


function startTimer() {
    timeInterval = setInterval(timer, 10)
    hrInp.value = ""
    minInp.value = ""
    secInp.value = ""
    btn.style.display = "block"
    inp.style.display = "none"
}

function timer() {
    mSec++
    mSecTime.innerHTML = mSec
    if (mSec == 100) {
        mSec = 0
        sec--
        secTime.innerHTML = sec
        if(secTime.innerHTML == 0){
            sec = 60
            sec--
            secTime.innerHTML = sec
            min--
            minTime.innerHTML = min
            if (minTime.innerHTML == 0) {
                min = 60
                min--
                minTime.innerHTML = min
                hr--
                hrTime.innerHTML = hr
            }
            
        }
    }
}

function stopTimer(){
    clearInterval(timeInterval)
}

function resetTimer() {
    clearInterval(timeInterval)
    hr = 0
    min = 0
    sec = 0
    mSec = 0

    hrTime.innerHTML = "00"
    minTime.innerHTML = "00"
    secTime.innerHTML = "00"
    mSecTime.innerHTML = "00"
}


