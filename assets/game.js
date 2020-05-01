//on click event listener
document.getElementById("roll").addEventListener("click", rollDice);
//function to randomly chose a number
function rollDice(){
    //clear the old dice numbers
    $("#dice-section").empty()

    for (var i = 1; i <= 6; i++) {
       var randomNumber1 = Math.ceil(Math.random() * i);
       var randomNumber2 = Math.ceil(Math.random() * i) 
    }

    // if statements to display the img for the appropriate number when rolled
    if(randomNumber1 === 1){
        var img = document.createElement('img');
        img.src = "assets/images/one.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber1 === 2){
        var img = document.createElement('img');
        img.src = "assets/images/two.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber1 === 3){
        var img = document.createElement('img');
        img.src = "assets/images/three.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber1 === 4){
        var img = document.createElement('img');
        img.src = "assets/images/four.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber1 === 5){
        var img = document.createElement('img');
        img.src = "assets/images/five.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber1 === 6){
        var img = document.createElement('img');
        img.src = "assets/images/six.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 1){
        var img = document.createElement('img');
        img.src = "assets/images/one.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 2){
        var img = document.createElement('img');
        img.src = "assets/images/two.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 3){
        var img = document.createElement('img');
        img.src = "assets/images/three.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 4){
        var img = document.createElement('img');
        img.src = "assets/images/four.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 5){
        var img = document.createElement('img');
        img.src = "assets/images/five.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
    if(randomNumber2 === 6){
        var img = document.createElement('img');
        img.src = "assets/images/six.jpg"
        document.getElementById("dice-section").appendChild(img)
    }
}




