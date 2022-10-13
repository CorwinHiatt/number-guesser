/*

create program that guesses a number from 1 to 10
then asks us to guess that number 
if its higher say 'to  high' and ask again
if its lower say "to low" and ask again 
if its the right number say "congratulations" and exit

*/
import readline from "readline-sync"

let userGuessRight = false

//while(true){//pointless
//}

    //guess # from 1-10
let NumberChosen = Math.ceil(Math.random() * 10)
                                                    //console.log(NumberChosen)

while(!userGuessRight){
let guess = readline.question("what is your guess")
if (guess == NumberChosen)
{
    console.log("congratulations!!! You space monkey")
    userGuessRight = true
}
if (guess > NumberChosen)
{
    console.log("to  high! Try again")
    //userGuessRight=false
}
if (guess < NumberChosen)
{
    console.log("to low! Try again")
   // userGuessRight=false
}
                                                    //console.log(guess)

}
                                                    
                                                    //while(!userGuessRight) {
                                                    //   console.log("what is your guess")
                                                    //   break  
                                                    //}
                                                    
                                                    