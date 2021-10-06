function countDown(){
    //Days Left
    var dateDays = Date.now(); 
    var deadlineDate = new Date(2021,7,17);

    var dayDifference= Math.abs(deadlineDate-dateDays);
    var days = dayDifference/(1000 * 3600 * 24)

    var daysLeft = Math.trunc(days);
       
    //Time constant
    const fecha = new Date();

    //Hours Left
    var hours = fecha.getHours();
        
    var hoursLeft = eval(hours-24);
    //Minutes Left
    var minutes = fecha.getMinutes();

    var minutesLeft = eval(minutes-60);
    //Seconds Left
    var seconds = fecha.getSeconds();

    var secondsLeft = eval(seconds-60);

    //Exceptions
    if (secondsLeft>-60) {
        minutesLeft+=1;
    }
    if (minutesLeft>-60) {
        hoursLeft+=1;
    }
    if (secondsLeft==-60) {
        secondsLeft=0;
    }
    if (minutesLeft==-60) {
        minutesLeft=0;
    }

    //Printing it:
    document.getElementById("days").innerHTML = Math.trunc(days) + " <span class='legends'>Días</span>";
    document.getElementById("hours").innerHTML = Math.abs(hoursLeft) + " <span class='legends'>Horas</span>";
    document.getElementById("minutes").innerHTML = Math.abs(minutesLeft) + " <span class='legends'>Minutos</span>";
    document.getElementById("seconds").innerHTML = Math.abs(secondsLeft) + " <span class='seconds_legend'>Segundos</span>";
    
    //Left Countdown
    
    if (daysLeft>=1) {
        document.getElementsByClassName("left-text")[0].innerHTML = "MTA in " + daysLeft + " days";
    } 
    else if (daysLeft<1) {
        document.getElementsByClassName("left-text")[0].innerHTML = "MTA in " + Math.abs(hoursLeft) + " hours";
    } 
    if (daysLeft<1 && hoursLeft>-1) {
        document.getElementsByClassName("left-text")[0].innerHTML = "MTA in " + Math.abs(minutesLeft) + " minutes";
    }
    if (daysLeft<1 && hoursLeft>-1 && minutesLeft>-1) {
        document.getElementsByClassName("left-text")[0].innerHTML = "MTA in " + Math.abs(secondsLeft) + " seconds";
    }

}
function temporizer(){
    setInterval(countDown,1000);
}
var dateDays = Date.now(); 
var deadlineDate = new Date(2021,7,17);
var dayDifference= Math.trunc(deadlineDate-dateDays);
var days = dayDifference/(1000 * 3600 * 24)

if (days>=0) {
    temporizer();
} else {
    document.getElementById("title2").innerHTML= "The certification already came!";
    document.getElementById("days").innerHTML = 0 + " <span class='legends'>Días</span>";
    document.getElementById("hours").innerHTML = 0 + " <span class='legends'>Horas</span>";
    document.getElementById("minutes").innerHTML = 0 + " <span class='legends'>Minutos</span>";
    document.getElementById("seconds").innerHTML = 0 + " <span class='seconds_legend'>Segundos</span>";
    document.getElementsByClassName("days")[0].style.color = "red";
    document.getElementsByClassName("hours")[0].style.color = "red";
    document.getElementsByClassName("minutes")[0].style.color = "red";
    document.getElementsByClassName("seconds")[0].style.color = "red";
    document.getElementsByClassName("left-text")[0].innerHTML = "MTA is here";
}