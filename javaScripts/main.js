function layout(event){
    let x = document.createElement('button')
    console.log("working")
    return x;
}
layout();
 
//create divs for rows
for(let i=0; i<6; i++){
let newDivs = document.createElement('div');
newDivs.className="rows";
document.querySelector('.rows1')[0].appendChild(newDivs);
}


