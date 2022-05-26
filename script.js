let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        let dieFourValue = Math.floor(Math.random()*6);
        
        console.log(dieOneValue,dieTwoValue,dieThreeValue,dieFourValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieFourValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) + (dieThreeValue + 1) + (dieFourValue + 1) );
    },
    1000
    );
}
roll();