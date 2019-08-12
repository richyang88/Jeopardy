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
            show2A:["GoodBye", "Yo", "Good Day kind Sir", "Top of the Morning Govenar"],
            show3A:"Yo",
        },
        
        {
            //index 1, question set 2
            show1Q: "Question 2",
            show2A:[" Q2 Answer A","Q2 Answer B","Q2 Answer set C","Q2 Answer set D"],
            show3A:"Answer"
        },
        {
            //index 2, question set 3
            show1Q: "Question 3",
            show2A:["Q3 Answer A","Q3 Answer B","Q3 Answer set C","Q3 Answer set D"]
        }], // end of r1 hello Questions
    row1BadgerQ:[
        {
            show1Q:"The type of Badger is known not to care about bee stings",
            show2A:['Weasle','Wasp Badger','Honey Badger','Ferret'],
            show3A:"Honey Badger"
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
        row1SnakeQ:[
            {
                show1Q:"r1 Snake Q",
                show2A:['r1 snake A','r1 snake B','r1 snake C','r1 snake D']
            }
        ],
            // Start of row 2 Questions
        row2hiQ:[
            {
                show1Q:"How to say Hello in French",
                show2A:['Howdy','Ni Hao','Hola','Bonjour'],
                show3A:'Bonjour'
            }
        ],
        row2BadgerQ:[
            {
                show1Q:"This type of badger is also the name of a super hero",
                show2A:['Antman','Minkman','Squirrel Girl','Wolverine'],
                show3A:'Wolverine'
            }
        ],
        row2MushQ:[
            {
                show1Q:"Hellow Questions 2",
                show2A:['r2 Hi A','r2 Hi B','r2 Hi C','r2 Hi D']
            }
        ],
        row2SnakeQ:[
            {
                show1Q:"Hellow Questions 2",
                show2A:['r2 Hi A','r2 Hi B','r2 Hi C','r2 Hi D']
            }
        ],
         // Start of row 3 Questions
         row3hiQ:[
            {
                show1Q:"How to say Hello in French",
                show2A:['Howdy','Ni Hao','Hola','Bonjour'],
                show3A:'Bonjour'
            }
        ],
        row3BadgerQ:[
            {
                show1Q:"This type of badger is also the name of a super hero",
                show2A:['Antman','Minkman','Squirrel Girl','Wolverine'],
                show3A:'Wolverine'
            }
        ],
        row3MushQ:[
            {
                show1Q:"Hellow Questions 2",
                show2A:['r2 Hi A','r2 Hi B','r2 Hi C','r2 Hi D']
            }
        ],
        row3SnakeQ:[
            {
                show1Q:"Hellow Questions 2",
                show2A:['r2 Hi A','r2 Hi B','r2 Hi C','r2 Hi D']
            }
        ]
}



// Buttons to start the row, making questions appear
function row1Start(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    // let rando= Math.floor(Math.random()*3);
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
    let questionShow= question.innerHTML = questionDb.row1hi1Q[0].show1Q;
    questBox.appendChild(question);

    //adding timer
    let timeDiv= document.createElement('div');
    let seconds= 15;
    question.appendChild(timeDiv);
    let timer = setInterval(function(){
        timeDiv.innerHTML = "Time on the Clock: "+seconds+" seconds";
        seconds--;
    },1000)



    //append answerBg to quetionBg div on index.html line 62
    questBox.appendChild(answerBg);

    //after 17 seconds remove class using Jquery
    let redoAnimation = setTimeout(function(){
        questBox.classList.remove('questAnimate');
        console.log("removing working")
    },17000);

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row1hi1Q[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row1hi1Q[0].show2A[i];
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
            //Stops the 17seoncd class remove so next question will have full time
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
                // stops redo animation from exiting window
                clearTimeout(redoAnimation);
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
                // stops redo animation from exiting window
                clearTimeout(redoAnimation);
                row1Q4();
                // $('#questionBg').removeClass('questAnimate');
            }else{
                console.log('wrong');
                return;
            }
        }
        
    }
}

// row 1 question 3();
// Buttons to start the row, making questions appear
function row1Q4(event){
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
                // stops redo animation from exiting window
                clearTimeout(redoAnimation);
                row1Q4();
                // $('#questionBg').removeClass('questAnimate');
            }else{
                console.log('wrong');
                return;
            }
        }
        
    }
}











// document.getElementById("questionBg").innerHTML = questionDb.row1hi1Q[0].show1Q + "<br></br>"+ questionDb.row1hi1Q[1].show2A
