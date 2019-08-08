 
// function to create divs for rows // stretch goal
// for(let i=0; i<6; i++){
// let newDivs = document.createElement('div');
// newDivs.className="row1sub r1"+[i];
// document.querySelector('.row1').appendChild(newDivs);
// // document.querySelector('.row2').appendChild(newDivs);
// // document.querySelector('.row3').appendChild(newDivs);
// }

function move(){
    let questBox = document.getElementById('questionBg');
    questBox.style.display ="block";
    console.log("working")
    questBox.animate([
        {transform: 'translateX(-1000px)'},
        {transform: 'translate(0px)'}],
        {duration: 1000})

    }
    

move()