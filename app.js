const max = prompt("enter max number");

const random = Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true){


    if(guess == "quit"){
        console.log("you quit!!!!");
        break;
    }

   else if(guess == random){
       console.log("your are right congrats!!!!random number was",random);
      break;
  }

    else if(guess < random){
                guess=prompt("Hint:your guess was too small,please try again!!!");
    }

   else {
    guess=prompt("Hint:your guess was too large,please try again!!!");
 }
}