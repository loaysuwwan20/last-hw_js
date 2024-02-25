const btn1 = document.querySelector('.count1 .b1');
const btn2 = document.querySelector('.count2 .b2');
const btn3 = document.querySelector('.count3 .b3');
const btn4 = document.querySelector('.count4 .b4');


let count1=0;
let count2=0;
let count3=0;
let count4=0;
btn1.onclick=()=>{
    
    count1++;
    document.querySelector('.count1 span').innerHTML=count1;
}
btn2.onclick=()=>{
    count2++;
    document.querySelector('.count2 span').innerHTML=count2;
}
btn3.onclick=()=>{
    count3++;
    document.querySelector('.count3 span').innerHTML=count3;
}
btn4.onclick=()=>{
    count4++;
    document.querySelector('.count4 span').innerHTML=count4;
}