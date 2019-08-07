function layout(event){
    let x = document.createElement('button')
    console.log("working")
    return x;
}
layout();
 
// create divs for rows
for(let i=0; i<6; i++){
let newDivs = document.createElement('div');
newDivs.className="row1sub r1"+[i];
document.querySelector('.row1').appendChild(newDivs);
// document.querySelector('.row2').appendChild(newDivs);
// document.querySelector('.row3').appendChild(newDivs);
}


