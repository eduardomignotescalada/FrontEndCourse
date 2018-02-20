hour = 0;
min = 0;
total = 0;

function addTwoDigits(m) {
       return m%10 + Math.floor(m/10)
}


function lateRide(n) {
    var hour = Math.floor(n / 60);
    console.log(hour);
    var min =  n % 60;
    console.log(min);
    var total=  addTwoDigits(hour) + addTwoDigits(min)
    console.log(total);
    return total;
}

