// row 1 question 3();

// Buttons to start the row, making questions appear
function row3Start(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    // Add hide class to buttons, seen on style.css line 69
    document.getElementById('start300Btn').classList.add('hideBtn');
    document.getElementById('row3a1').innerHTML="You Started Here";
    document.getElementById('row3a1').classList.add('row1b1');
    document.getElementById('start100Btn').classList.add('hideBtn');
    document.getElementById('start200Btn').classList.add('hideBtn');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row3hiQ[0].show1Q;
    questBox.appendChild(question);

    //adding timer
    let timeDiv= document.createElement('div');
    let seconds= 15;
    question.appendChild(timeDiv);
    let timer = setInterval(function(){
        timeDiv.innerHTML = "Time on the Clock: "+seconds+" seconds";
        seconds--;
    },1000)

    //after 17 seconds remove animation class using Jquery
    let redoAnimation = setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row3hiQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row3hiQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option0'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=300;
                document.getElementById('userScoreSpan').innerText = userScore;
                clearTimeout(redoAnimation);
                row3Q2();
            }else{
                console.log('wrong');
                finish();
            }
        }
    }
}

document.querySelector('#start300Btn').addEventListener('click', row3Start)


// row3 question 2();
// Buttons to start the row, making questions appear
function row3Q2(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    // let rando= Math.floor(Math.random()*3);
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row3BadgerQ[0].show1Q;
    questBox.appendChild(question);

    //adding timer
    let timeDiv= document.createElement('div');
    let seconds= 15;
    question.appendChild(timeDiv);
    let timer = setInterval(function(){
        timeDiv.innerHTML = "Time on the Clock: "+seconds+" seconds";
        seconds--;
    },1000)

    //after 17 seconds remove animation class 
    let redoAnimation = setTimeout(function(){
        questBox.classList.remove('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row3BadgerQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row3BadgerQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option1'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=300;
                document.getElementById('userScoreSpan').innerText = userScore;
                // stops redo animation from exiting window
                clearTimeout(redoAnimation);
                row3Q3();
            }else{
                console.log('wrong');
                finish();
            }
        }
        
    }
}

// row 1 question 3;
// Buttons to start the row, making questions appear
function row3Q3(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    // let rando= Math.floor(Math.random()*3);
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row3MushQ[0].show1Q;
    questBox.appendChild(question);
    
    //adding timer
    let timeDiv= document.createElement('div');
    let seconds= 15;
    question.appendChild(timeDiv);
    let timer = setInterval(function(){
        timeDiv.innerHTML = "Time on the Clock: "+seconds+" seconds";
        seconds--;
    },1000)

    //after 17 seconds remove animation class using Jquery
    let redoAnimation = setTimeout(function(){
        questBox.classList.remove('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row3MushQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row3MushQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option3'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=300;
                document.getElementById('userScoreSpan').innerText = userScore;
                // stops redo animation from exiting window
                clearTimeout(redoAnimation);
                row3Q4();
                // $('#questionBg').removeClass('questAnimate');
            }else{
                console.log('wrong');
                finish();
            }
        }
        
    }
}

// row 1 question 4;
// Buttons to start the row, making questions appear
function row3Q4(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    // let rando= Math.floor(Math.random()*3);
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row3SnakeQ[0].show1Q;
    questBox.appendChild(question);
    
    //adding timer
    let timeDiv= document.createElement('div');
    let seconds= 15;
    question.appendChild(timeDiv);
    let timer = setInterval(function(){
        timeDiv.innerHTML = "Time on the Clock: "+seconds+" seconds";
        seconds--;
    },1000)

    //after 17 seconds remove animation class using Jquery
    let redoAnimation = setTimeout(function(){
        questBox.classList.remove('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row3SnakeQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row3SnakeQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option2'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=300;
                document.getElementById('userScoreSpan').innerText = userScore;
                clearTimeout(redoAnimation);
                finish();
            }else{
                console.log('wrong');
                finish()
            }
        }
        
    }
}

//end of game
function finish(event){
    let questBox = document.getElementById('questionBg');
    let randomRow = Math.floor(Math.random()*3)+1;
    let randomRightAnswers= Math.floor(Math.random()*4)+1;
    computerScore=randomRow*randomRightAnswers*100; 
    document.getElementById('computerScoreSpan').innerHTML = computerScore;

    if(userScore>computerScore){
        console.log('You win')
        questBox.innerHTML ="You: "+userScore+" vs Computer: "+computerScore+" You Win";
        questBox.style.backgroundImage = ("url('../images/snakeHappy.jpeg')");
    }else if(userScore===computerScore){
        questBox.innerHTML ="You: "+userScore+" vs Computer: "+computerScore+" You Tie";
        // questBox.style.backgroundImage = ("url('../images/snakeHappy.jpeg')");
    }else{
        questBox.innerHTML ="You: "+userScore+" vs Computer: "+computerScore+" Computer Win";
        questBox.style.backgroundImage = ("url('../images/snakeWrong.jpg')")
    }

}