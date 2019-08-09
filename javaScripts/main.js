 
// function to create divs for rows // stretch goal
// for(let i=0; i<6; i++){
// let newDivs = document.createElement('div');
// newDivs.className="row1sub r1"+[i];
// document.querySelector('.row1').appendChild(newDivs);
// // document.querySelector('.row2').appendChild(newDivs);
// // document.querySelector('.row3').appendChild(newDivs);
// }

//Buttons to start the row, making questions appear
function move(event){
    let questBox = document.getElementById('questionBg');
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

    //for loop to pull from Questions Database
    for(let i=0; i<questionDb.row1hi1Q[0].show2A.length; i++){
        let choice1=document.createElement('button');
        choice1.className = "choiceBtn option"+[i];
        choice1.id = "option"+[i];
        console.log(choice1.id);
        let choiceBtn = choice1.innerHTML = (i+1) + ") " + questionDb.row1hi1Q[0].show2A[i];
        questBox.appendChild(choice1);

        
        choice1.addEventListener('click', check)

        function check(event){
            if(event.target.id=='option1'){
                console.log('Right')
            }else{
                console.log('wrong');
                
            }
            
    }

    //player clicked this button with the right id
    // document.querySelector('.choiceBtn').addEventListener('click', right)

    // function right(event){
    //     if(event.target.id=='option1'){
    //         console.log('Right')
    //     }else{
    //         console.log('wrong')
    //     }
    }
    
    // if (document.querySelector!=='#option1'){
    //     document.querySelector('#option1').addEventListener('click', wrong)
    // }


    //after 17 seconds remove class
    setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },17000);
}

document.querySelector('#start100Btn').addEventListener('click', move)
document.querySelector('#start200Btn').addEventListener('click', move)
document.querySelector('#start300Btn').addEventListener('click', move)

//Questions Obj
let questionDb = {
    //row 1, column hello questions
    row1hi1Q:[
        //index 0, question set 1
        {
            //named show1 or 2 to make questions display first due to order
            show1Q: "English Slang for Hello",
            show2A:["What is GoodBye", "What is Yo", "What is Good Day kind Sir", "What is Top of the Morning Govenar"],
            points: 100
        },
        
        {
            //index 1, question set 2
            show1Q: "Question 2",
            show2A:["Answer set 2"]
        },
        {
            //index 2, question set 3
            show1Q: "Question 3",
            show2Q:["Answer set 3"]
        }], // end of r1 hello Questions
    row1BadgerQ:[
        {
            show1Q:"Badger Row 1 Question 1",
            show2A:['Answer A','Answer B','Answer C','Answer D']
        },
        {
            show1Q:"Badger Row 1 Question 2",
            show2A:['Answer A','Answer B','Answer C','Answer D']
        },
        {
            show1Q:"Badger Row 1 Question 3",
            show2A:['Answer A','Answer B','Answer C','Answer D']
        },

    ]

}




// document.getElementById("questionBg").innerHTML = questionDb.row1hi1Q[0].show1Q + "<br></br>"+ questionDb.row1hi1Q[1].show2A
