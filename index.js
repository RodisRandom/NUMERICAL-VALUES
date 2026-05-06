//a project


const myh1 = document.getElementById(`myh1`);
const myLabel2 = document.getElementById(`myLabel2`);
const myInput2 = document.getElementById(`myInput2`);
const button4 = document.getElementById(`button4`);
let comment

button4.onclick = function(){
    comment = myInput2.value;

    myh1.textContent = (`Welcome, ${comment}`)
}


const myLabel = document.getElementById(`myLabel`);
const button1 = document.getElementById(`button1`);
const button2 = document.getElementById(`button2`);
const button3 = document.getElementById(`button3`);
const button5 = document.getElementById(`button5`);
const p1 = document.getElementById(`p1`);
let value = 0;
let message;

button1.onclick = function(){

    value++;
    myLabel.textContent = value;
}

button2.onclick = function(){
    value = 0;
    myLabel.textContent = value;
}

button3.onclick = function(){
    value--;
    myLabel.textContent = value;
}

button5.onclick = function(){

    switch(true){

    case value>=10000:
        p1.textContent = (`congrats, you beated me... (this is the last messaage), and because of that, here's my password: sjiodajisjdjiaod`);
        break;    

    case value>=5000:
        p1.textContent = (`bros addicted, HOW IN THE JESUS`);
        break;

    case value>=2000:
        p1.textContent = (`wait... HOW????`);
        break;

    case value>=1000:
        p1.textContent = (`are you gonna stop?`);
        break;  

    case value>=500:
        p1.textContent = (`you're way too dedicated`);
        break;    

    case value>=200:
        p1.textContent = (`you're twice as motivated`);
        break;        

    case value>=100:
        p1.textContent = (`You're dedicated`);
        break;

    case value>=95:
        p1.textContent = (`you're an intermediate person`);
        break;

    case value>=90:
        p1.textContent = (`you're a student with confident`);
        break;
        
    case value>=85:
        p1.textContent = (`you're a benchmarking person`);
        break;
        
    case value>=80:
        p1.textContent = (`you're an average person who is only motivated`);
        break;
        
    case value>=70:
        p1.textContent = (`you're starting to get motivated`);
        break;
        
    case value>=60:
        p1.textContent = (`not bad`);
        break;
        
    case value>=50:
        p1.textContent = (`you're halfway to the milestone`);
        break;
        
    case value>=40:
        p1.textContent = (`you're not motivated enough`);
        break;
        
    case value>=30:
        p1.textContent = (`you're a beginner`);
        break;
        
    case value>=20:
        p1.textContent = (`you're a lazy person`);
        break;
        
    case value>=10:
        p1.textContet = (`you're the unmotivated person one`);
        break;

    case value>=0:
        p1.textContent = (`you're the most laziest person ever`);
        break;
        
    default:
        p1.textContent = (`your number can't be negative`);
        break;    

    }    

}