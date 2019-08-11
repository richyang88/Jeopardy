let userScore=0;
let computerScore=0;

//Questions Obj
let questionDb = {
    //row 1, column hello questions
    row1hi1Q:[
        //index 0, question set 1
        {
            //named show1 or 2 to make questions display first due to order
            show1Q: "English Slang for Hello",
            show2A:["What is GoodBye", "What is Yo", "What is Good Day kind Sir", "What is Top of the Morning Govenar"],
            show3A:"What is Yo",
            points: 100
        },
        
        {
            //index 1, question set 2
            show1Q: "Question 2",
            show2A:[" Q2 Answer A","Q2 Answer B","Q2 Answer set C","Q2 Answer set D"]
        },
        {
            //index 2, question set 3
            show1Q: "Question 3",
            show2A:["Q3 Answer A","Q3 Answer B","Q3 Answer set C","Q3 Answer set D"]
        }], // end of r1 hello Questions
    row1BadgerQ:[
        {
            show1Q:"Badger Row 1 Question 1",
            show2A:['Q1 Answer A','Q1 Answer B','Q1 Answer C','Q1 Answer D']
        },
        {
            show1Q:"Badger Row 1 Question 2",
            show2A:['Q2 Answer A','Q2 Answer B','Q2 Answer C','Q2 Answer D']
        },
        {
            show1Q:"Badger Row 1 Question 3",
            show2A:['Q3 Answer A','Q3 Answer B','Q3 Answer C','Q3 Answer D']
        }],// end r1 badger questions 
        row1MushQ:[
            {
                show1Q:"Mushroom Row 1 Question 1",
                show2A:['Q3 Answer A','Q3 Answer B','Q3 Answer C','Q3 Answer D']
            }],//end of r1 Mushroom
        
}



// Buttons to start the row, making questions appear
function row1Start(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    let rando= Math.floor(Math.random()*3);
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    // Add hide class to buttons, seen on style.css line 69
    document.getElementById('start100Btn').classList.add('hideBtn');
    document.getElementById('row1a1').innerHTML="You Started Here";
    document.getElementById('row1a1').classList.add('row1b1');
    document.getElementById('start200Btn').classList.add('hideBtn');
    document.getElementById('start300Btn').classList.add('hideBtn');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row1hi1Q[rando].show1Q;
    questBox.appendChild(question);

    //append answerBg to quetionBg div on index.html line 62
    questBox.appendChild(answerBg);

    //after 17 seconds remove class using Jquery
    let redoAnimation = setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row1hi1Q[rando].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row1hi1Q[rando].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)
        
    }
    function check(event){
        if(event.target.id=='option1'){
            console.log('Right');
            questBox.removeChild(question);
            questBox.removeChild(answerBg);
            userScore+=100;
            document.getElementById('userScoreSpan').innerText = userScore;
            console.log(redoAnimation);
            //not working here
            clearTimeout(redoAnimation, console.log('stop time out'))
            console.log(redoAnimation);
            row1Q2();
        }else{
            console.log('wrong');
            // go to wrong answer function
            return;
        }
    }

}

document.querySelector('#start100Btn').addEventListener('click', row1Start)
// document.querySelector('#start300Btn').addEventListener('click', move)


// row1 question 2();

// Buttons to start the row, making questions appear
function row1Q2(event){
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
    let questionShow= question.innerHTML = questionDb.row1BadgerQ[0].show1Q;
    questBox.appendChild(question);

    //after 17 seconds remove animation class using Jquery
    let redoAnimation = setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row1BadgerQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row1BadgerQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option1'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=100;
                document.getElementById('userScoreSpan').innerText = userScore;
                clearTimeout(redoAnimation)
                row1Q3();
            }else{
                console.log('wrong');
                return;
            }
        }
        
    }
}

// row 1 question 3();

// Buttons to start the row, making questions appear
function row1Q3(event){
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
    let questionShow= question.innerHTML = questionDb.row1MushQ[0].show1Q;
    questBox.appendChild(question);
    
    //after 17 seconds remove animation class using Jquery
    let redoAnimation = setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row1MushQ[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row1MushQ[0].show2A[i];
        answerBg.appendChild(choice1);

        //event listener for choices 
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option1'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=100;
                document.getElementById('userScoreSpan').innerText = userScore;
                clearTimeout(redoAnimation)
                row1Q3();
                // $('#questionBg').removeClass('questAnimate');
            }else{
                console.log('wrong');
                return;
            }
        }
        
    }
}













// document.getElementById("questionBg").innerHTML = questionDb.row1hi1Q[0].show1Q + "<br></br>"+ questionDb.row1hi1Q[1].show2A
