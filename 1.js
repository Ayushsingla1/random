let element=document.getElementById("hi");
let element2=document.getElementById("submit");
let element3=document.getElementById("Hint");
let element4=document.getElementById("Output");
let answer=Math.floor(Math.random() * 100);
let user_value;
let count=0 ;
element2.onclick=function(){

    user_value=Number(element.value);
    element3.textContent="";
    count++;
    if(isNaN(user_value)){
        window.alert("Please Enter a Value Between 0-100");
    }
    if(user_value < 0){
        window.alert("Please Enter a Value Between 0-100");
    }
    else if(user_value < 0){
        window.alert("Please Enter a Value Between 0-100");
    }
    else if(user_value===answer){
        element3.textContent="Congratulations";
        element4.textContent=`You completed the game in ${count} chances.`;
        count=0;
        answer=Math.floor(Math.random() * 100);
    }
    else if(user_value > answer){
        element3.textContent = "Enter a smaller value.";
    }
    else if(user_value < answer){
        element3.textContent = "Enter a greater value.";
    }
}
