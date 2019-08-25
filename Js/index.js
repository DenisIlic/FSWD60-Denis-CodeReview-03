var action = document.getElementById('send_js');

action.addEventListener("click",clicked,false);





function clicked(){

    var name = document.getElementById('fname').value;
    var age = document.getElementById('age').value;
    var country = document.getElementById('country').value;
    var car = document.getElementById('car').value;
    

    if (name == "") {

        alert("Write your Name.");

    }else if(age == "" || isNaN(age)){

        alert("Please write your age.");

    }else if(car == "" || isNaN(car)){

        alert("Please write your car Horsepower.")

    }else{

        calculateInsurance(name, age, country, car);

    }

}


function calculateInsurance(a, b, c, d){

    if (c == 0) {

        var insurance = Math.round(d * 100 / b + 50);

    }else if(c == 1){

        var insurance = Math.round(d * 120 / b + 100);
    
    }else{
        
        let bplus = Number(b) + 3;
        var insurance = Math.round(d * 150 / bplus + 50);
        
    }

    document.getElementById('result').innerHTML = `${a}, your insurance costs ${insurance}€`
    
}
