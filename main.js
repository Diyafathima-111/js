let number=0
const numberdisplay=document.querySelector("#display");

function increment(){
    number=number+1
    numberdisplay.innerHTML=number;
}
 
function decrement(){
    number=number-1
    numberdisplay.innerHTML=number;
}

function clearnumber(){
    number =0
    numberdisplay.innerHTML=0;
}
