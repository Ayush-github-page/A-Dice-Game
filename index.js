var dice_value = [];
dice_value.push(Math.floor(Math.random()*6+1));
dice_value.push(Math.floor(Math.random()*6+1));

dice = [];
dice = document.querySelectorAll("i");

// var players = document.querySelectorAll("h2");

// if(dice_value[0]>dice_value[1]) players[0].textContent = "🚩 Player 1 wins";
// else if(dice_value[0]<dice_value[1]) players[1].textContent = "Player 2 wins 🚩";
if(dice_value[0]>dice_value[1]) document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
else if(dice_value[0]<dice_value[1]) document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
else document.querySelector("h1").innerHTML = "Draw!";

for(var i=0; i<2; ++i){
    switch (dice_value[i]) {
        case 1 : dice[i].classList.add("fa-dice-one"); break;
        case 2 : dice[i].classList.add("fa-dice-two"); break;
        case 3 : dice[i].classList.add("fa-dice-three"); break;
        case 4 : dice[i].classList.add("fa-dice-four"); break;
        case 5 : dice[i].classList.add("fa-dice-five"); break;
        case 6 : dice[i].classList.add("fa-dice-six"); break;
        default: dice[i].classList.add("fa-dice-six");
    }
}
