
let istatus = document.querySelector("h5") 
let btn=document.querySelector("button")
let addFriend = document.querySelector("#check")
//let removeFriend = document.querySelector("#remove")
let countingnum = function(){
              // by using the COLUSER function .
let count = 0 // this is used for counting the user how many time user chick the btn 

let check = 0
addFriend.addEventListener("click",function()
{
    if(check == 0)
    {
    istatus.innerHTML= "Friends"
    btn.innerHTML="Remove"
    btn.style.padding="12px 23px"
    istatus.style.color="green"
    btn.style.fontSize="15px"
    check = 1
}
else
{
    istatus.innerHTML="Stranger"
    btn.innerHTML= "Add Friend"
    istatus.style.color="red"
    btn.style.padding="12px 12px"

    check = 0

}
console.log(++count)
});
}

countingnum();











//removeFriend.addEventListener("click",function(){
   //istatus.innerHTML="stranger"
  // istatus.style.color="red"
//})