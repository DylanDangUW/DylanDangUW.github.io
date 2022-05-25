let image = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/150px-Dice-1-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/150px-Dice-2-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/150px-Dice-3-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/150px-Dice-4-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/150px-Dice-5-b.svg.png",
             "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die{
            die.classList.remove("shake");
        }));
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        let dieFourValue = Math.floor(Math.random()*6);
        let dieFiveValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue,dieFourValue,dieFiveValue);
        document.querySelector("#die-1").setAttribute("src", images[diceOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[diceTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[diceThreeValue]);
        document.querySelector("#die-4").setAttribute("src", images[diceFourValue]);
        document.querySelector("#die-5").setAttribute("src", images[diceFiveValue]);
    },
    1000
    );
}
