function game(){
    let userScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(item => { 
        item.addEventListener("click",playRound)
        
    });
    function playRound(){
        




         const playerSelect = this;


      
        
        const userChoice = ((this.getAttribute("id").split('-'))[1]);
        console.log(userChoice);  
        const choiceArray = ['rock','paper','scissor'];
        const computerChoice = choiceArray[(Math.floor(Math.random()*3))];
        playerSelect.classList.add('selected');
        const computerSelect = document.getElementById(`computer-${computerChoice}`);
        animateSelection(playerSelect,computerSelect);



        let roundResult = compare(userChoice,computerChoice);
        if(roundResult==1){
            userScore++;
        }
        else if(roundResult ==-1){
            computerScore++;
        }
        let finalScore = document.querySelector(".final-result");
        const userBoard = document.getElementById("user-score");
        const computerBoard = document.getElementById("computer-score");
        userBoard.innerText = userScore;
        computerBoard.innerText = computerScore;
        
        if(userScore==5 || computerScore==5){
            if(userScore>computerScore){
                finalScore.innerText = "PLAYER HAS WON!";
                userScore = 0;
                computerScore = 0;
            }
            else{
                finalScore.innerText = 'OH NO! COMPUTER WINS';
                userScore = 0;
                computerScore = 0;
            }
        }
        else{
            finalScore.innerText = '';
           
        }

        
       







    
        
        }


        function animateSelection(user,computer){
            user.classList.add('selected');
            computer.classList.add('selected');
            setTimeout(()=>{
                user.classList.remove('selected');
                computer.classList.remove('selected');

            },300);

        }
    
    }
  






game();

const compare = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return 0;
    }
    else if((userChoice == 'rock' && computerChoice == 'scissor') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissor' && computerChoice == 'paper')){
            return 1;
        }
    else{
        return -1;
    }
}