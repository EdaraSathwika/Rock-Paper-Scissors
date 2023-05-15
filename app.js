const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoices=document.querySelectorAll('button');
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateRandomNumber()
    getResult()
}))
function generateRandomNumber()
{
    const randomNumber=Math.random()*3//because we have 3 choices Rock,paper,scissors
    if(randomNumber==1)
    {
        computerChoice="Rock"
        computerChoiceDisplay.innerHTML=computerChoice
    }
    else if(randomNumber==2)
    {
        computerChoice="Paper"
        computerChoiceDisplay.innerHTML=computerChoice
    }
    else{

        computerChoice="Scissors"
        computerChoiceDisplay.innerHTML=computerChoice
    }
}
function getResult()
{
    if(computerChoice===userChoice)
    result='its a draw!';
    if(computerChoice==='Rock' && userChoice==='Paper')
    result='you win!';
    if(computerChoice==='Rock' && userChoice==='Scissors')
    result='you lost!';
    if(computerChoice==='Paper' && userChoice==='Rock')
    result='you lost!';
    if(computerChoice==='Paper' && userChoice==='Scissors')
    result='you win!';
    if(computerChoice==='Scissors' && userChoice==='Paper')
    result='you lost!';
    if(computerChoice==='Scissors' && userChoice==='Rock')
    result='you win!';
    resultDisplay.innerHTML=result
    
}