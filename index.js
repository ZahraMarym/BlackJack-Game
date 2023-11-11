let firstCard=0;
let SecondCard=0;
let hasBlackJack = false;
let isAlive = false;
let message="Wants to play a round?";
let messageEL=document.getElementById("message-el");
let sumEL=document.querySelector("#sum-el");
let cardsEL=document.querySelector("#cards-el");
let errorEL=document.getElementById("error-el");
let playerEL=document.getElementById("player-el");
messageEL.textContent=message;
let sum=0;
let cards = [];
let player={
    name:"Per",
    chip:145
};
playerEL.textContent=player.name+": $"+player.chip;
function renderGame(){
    console.log(firstCard);
    console.log(SecondCard);
    sumEL.textContent="Sum: "+sum;
    cardsEL.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent+=cards[i]+" ";
    };
    if(sum<21){
    message="Do you want to draw a new card?";
    messageEL.textContent=message;
}
else if(sum===21){
    message="Wohoo! You have got BlackJack.";
    messageEL.textContent=message;
    hasBlackJack=true;
}
else{
    message="You are out of the Game!";
    messageEL.textContent=message;    isAlive=false;
}
console.log("Has Black Jack: "+hasBlackJack);
console.log("Is Alive: "+isAlive);
}
function StartGame(){
    isAlive = true;
    hasBlackJack = false;
    sum=0;
    cards=[];
    errorEL.textContent="";
    firstCard=getRandomCard()
    SecondCard=getRandomCard()
    sum=firstCard+SecondCard;
    cards.push(firstCard);
    cards.push(SecondCard);
    renderGame();
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard=getRandomCard();
    console.log(newCard);
    sum+=newCard;
    cards.push(newCard);
    renderGame();}
    else if(isAlive===false){
        errorEL.textContent="You are out of the Game";
    }
    else{
        errorEL.textContent="You have already got BlackJack!";
    }
}
function getRandomCard(){
    let card=Math.floor(1+Math.random()*13);
    if(card>10){
        return 10;
    }
    else if(card===1){
        return 11;
    }
    else{
        return card;
    }
}