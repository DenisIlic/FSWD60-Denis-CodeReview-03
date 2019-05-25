function drop(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function calculateInsurance(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var power = document.getElementById("power").value;

    var e = document.getElementById("dropcalc").value;

    if (e == 0){
        var res = parseInt(power) * 100 / parseInt(age) + 50;
        document.getElementById("result").innerHTML = name + ", your insurance costs " +res +"€";
    }   else if  (e == 1) {
        var res2 = parseInt(power) * 120 / parseInt(age) + 100;
        document.getElementById("result").innerHTML = name + ", your insurance costs " +res2 +"€";
    }   else if (e == 2) {
        var res3 = Math.floor(parseInt(power) * 150 / (parseInt(age) + 3) + 50);
        document.getElementById("result").innerHTML = name + ", your insurance costs " +res3 +"€";
    }
}
