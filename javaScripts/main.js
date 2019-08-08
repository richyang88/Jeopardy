 
// function to create divs for rows // stretch goal
// for(let i=0; i<6; i++){
// let newDivs = document.createElement('div');
// newDivs.className="row1sub r1"+[i];
// document.querySelector('.row1').appendChild(newDivs);
// // document.querySelector('.row2').appendChild(newDivs);
// // document.querySelector('.row3').appendChild(newDivs);
// }

function move(event){
    let questBox = document.getElementById('questionBg');
    questBox.style.display ="block";
    console.log("working")
    //move center to out of screen
    questBox.animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateX(-1500px)'}
    ],
        {duration: 5000})

    // pause
    questBox.animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateX(0px)'}
    ],
        {duration: 4000})

    //move off screen to center
    questBox.animate([
        {transform: 'translateX(-1000px)'},
        {transform: 'translateX(0px)'}
        // PAUSE HERE
        ],
        {duration: 1000})
    



}

document.querySelector('#start100Btn').addEventListener('click', move)
// move();