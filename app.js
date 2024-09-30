


var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var second = document.getElementById("second")
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");




setInterval(() => {
    var time = new Date();

    var count =
        hours.innerText = time.getHours() + ":";
    minutes.innerText = time.getMinutes() ;
    second.innerText = time.getSeconds() ;
    date.innerText = time.getDate() + "- ";
    month.innerText = time.getMonth() + "- ";
    year.innerText = time.getFullYear();

    if (time.getHours() > 12) {
        hours.innerText = time.getHours();
        count++
    }
    minutes.innerText = time.getMinutes();
    second.innerText = time.getSeconds();
    if (time.getDate() < 24 && time.getDate() < 12) {
        document.getElementById("am/pm").innerText = "AM";
    }
    else {
        document.getElementById("am/pm").innerText = "PM";
    }

}, 1000)