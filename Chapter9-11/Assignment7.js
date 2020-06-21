let value=4;
let input=prompt("Guess the number between 1-10");
if(parseInt(input)==value){
    alert("Bingo! Correct answer");
}
else if(parseInt(input)==++value){
    alert("Close enough to the correct answer");
}