 
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
    questBox.style.display ="block";
    console.log("working");
    questBox.classList.add('questAnimate');
    setTimeout(function(){
        $('#questionBg').removeClass('questAnimate');
        console.log("removing working")
    },22000);

    // removeClass();

}
function removeClass(){
    let questBox = document.getElementById('questionBg');
    questBox.classList.remove('questAnimate');
    console.log("removing")
}
document.querySelector('#start100Btn').addEventListener('click', move)
document.querySelector('#start200Btn').addEventListener('click', move)
document.querySelector('#start300Btn').addEventListener('click', move)
