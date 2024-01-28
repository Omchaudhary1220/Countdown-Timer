const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const start_butt = document.getElementById("start_butt");
const stop_butt = document.getElementById("stop_butt");
const reset_butt = document.getElementById("reset_butt");
const submit_butt = document.getElementById("submit_butt");
const time_up = document.getElementById("time_up");
const t_message = document.getElementById("time_up_message");
t_message.classList.add("hide");
let h = 0, m = 0, s = 0;
let Interval;
let running = 0;
let lim = 0;
let temp_m = 0;
function Counter() {
    s++;
    if (s == 60) {
        if (lim > 0) {
            temp_m++;
            console.log(temp_m);
        }
        m++;
        second.innerText = '00';
        s = 0;
    }
    else {
        second.innerText = (s < 10) ? `0${s}` : s;
    }
    if (m == 60) {
        h++;
        minute.innerText = '00';
        m = 0;
    }
    else {
        minute.innerText = (m < 10) ? `0${m}` : m;
    }
    if (h == 13) {
        reset();
        alert("Limit Exceed");
    }
    else {
        hour.innerText = (h < 10) ? `0${h}` : h;
    }
    if (lim != 0 && temp_m == lim) {
        reset();
        lim = temp_m = 0;
        time_up.play();
        t_message.classList.remove("hide");
    }
}
function StartCounter() {
    if (running == 0) {
        t_message.classList.add("hide");
        Interval = setInterval(Counter, 1000);
        running = 1;
        start_butt.disabled = true;
        stop_butt.disabled = false;
    }
}
function StopCounter() {
    if (running == 1) {
        clearInterval(Interval);
        running = 0;
        stop_butt.disabled = true;
        start_butt.disabled = false;
    }
}
function reset() {
    h = m = s = 0;
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';
    clearInterval(Interval);
    running = 0;
    submit_butt.disabled = false;
    start_butt.disabled = false;
    t_message.classList.add("hide");
}
function setlimit() {
    lim = document.getElementById("limit_val").value;
    if (lim > 0) {
        reset();
        submit_butt.disabled = true;
        StartCounter();
    }
}
