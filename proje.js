let name = prompt("Lütfen adinizi giriniz: ");
let myName = document.getElementById('myName');
let myClock = document.getElementById('myClock');
let clock = document.querySelector(".clock");


myName.innerHTML = "name"

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

const d = new Date();
let day = weekday[d.getDay()];

clock.innerHTML = day

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    myClock.innerHTML =  h + ":" + m + ":" + s +  day ;
    setTimeout(showTime, 1000);

  
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
    showTime()