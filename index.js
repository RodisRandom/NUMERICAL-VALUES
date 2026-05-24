//random guessning number;


const minNum = 10000;
const maxNum = 20000;
let v = Math.floor(Math.random() * (maxNum - minNum)) + minNum;


let attempt = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Put a numerical value, try again`);
    }

    else if(guess < minNum || guess > maxNum){
        window.alert(`Pls put a valid number and try again...`);
    }

    else{

        attempt++;

        if(guess < v){
            window.alert(`Your answer is too low!!`);
        }

        else if(guess > v){
            window.alert(`Your answer is too high!`);
        }

        else{
            window.alert(`You are correct, you had ${attempt} attempts and the answer is ${v}`);
            running = false;
        }

    }
}

console.log(v);