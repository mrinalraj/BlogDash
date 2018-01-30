//function to return day of month
function showDay(){
    var currentFull=new Date();
    var daysAr = new Array();
    daysAr[0] = "Sunday";
    daysAr[1] = "Monday";
    daysAr[2] = "Tuesday";
    daysAr[3] = "Wednasday";
    daysAr[4] = "Thrusday";
    daysAr[5] = "Friday";
    daysAr[6] = "Saturday";
    return dayToday = daysAr[currentFull.getDay()];
    
}

//function returns current local month
function showMonth(){
    var currentFull=new Date();
    var monthAr = new Array();
    monthAr[0] = "January";
    monthAr[1] = "February";
    monthAr[2] = "March";
    monthAr[3] = "April";
    monthAr[4] = "May";
    monthAr[5] = "June";
    monthAr[6] = "July";
    monthAr[7] = "August";
    monthAr[8] = "September";
    monthAr[9] = "October";
    monthAr[10] = "November";
    monthAr[11] = "December";
    return month = monthAr[currentFull.getMonth()];
}

//getting clients local time
function display(){
    var show=setInterval(function(){
    var currentFull=new Date();
    var hr=currentFull.getHours();      
    var min=currentFull.getMinutes();
    var sec=currentFull.getSeconds();
    var msec=currentFull.getMilliseconds();
    var date=currentFull.getDate();
    var year=currentFull.getFullYear();
    var day=currentFull.getDay();
    var variable="";
    if(hr>12){
        hr=hr-12;
        variable="PM";
    }
    else{
        variable="AM";
        hr=hr;
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('variable').innerHTML = variable;
    document.getElementById('day').innerHTML = showDay();
    document.getElementById('month').innerHTML = showMonth();
    document.getElementById('date').innerHTML = date;
    document.getElementById('year').innerHTML = year;
    },100);   
}


window.onload=display;