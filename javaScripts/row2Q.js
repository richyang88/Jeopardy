// row 1 question 3();

// Buttons to start the row, making questions appear
function row2Start(event){
    let questBox = document.getElementById('questionBg');
    let answerBg = document.createElement('div');
    answerBg.id="answerBgId";
    
    let rando= Math.floor(Math.random()*3);
    console.log("working");
    //questAnimate = class who's only purpose is to animate div attach to
    //can be found first on CSS/style.css line 119
    questBox.classList.add('questAnimate');

    // Add hide class to buttons, seen on style.css line 69
    document.getElementById('start200Btn').classList.add('hideBtn');
    document.getElementById('row2a1').innerHTML="You Started Here";
    document.getElementById('row2a1').classList.add('row1b1');
    document.getElementById('start100Btn').classList.add('hideBtn');
    document.getElementById('start300Btn').classList.add('hideBtn');

    //create div to add to #questionBg
    let question = document.createElement("div");
    //top row found on style.css near line 128
    question.className='questionTopRow';
    let questionShow= question.innerHTML = questionDb.row1hi1Q[rando].show1Q;
    questBox.appendChild(question);

    //append answerBg to quetionBg div on index.html line 86
    questBox.appendChild(answerBg);

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

        function check(event){
            if(event.target.id=='option1'){
                console.log('Right');
                questBox.removeChild(question);
                questBox.removeChild(answerBg);
                userScore+=100;
                document.getElementById('userScoreSpan').innerText = userScore;
                // choice1.removeChild('button');
                row1Q2();
                // $('#questionBg').removeClass('questAnimate');
            }else{
                console.log('wrong');
                return;
            }
        }
    }

    //after 17 seconds remove class using Jquery
    setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);
}

document.querySelector('#start200Btn').addEventListener('click', row2Start)