
var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = "1";
    setTimeout(function(){
        love.style.opacity = "0";
    },700);
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
        love.style.opacity = "0";
    },1400);
});

// setTimeout //inbuilt function of browser, in one word it means delay
// syntax : setTimeout(function(){
// },delay in ms) // also makes our code asynchronius.
//  as js me line by line execution nhi hota , isliye , setTimeout me , if there are 2 setTimeouts , then jiska time pehle over hoga , vo console me pehle run hoga.

