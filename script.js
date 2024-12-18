var currentStatus =document.querySelector("h5")
var btn=document.querySelector("#add")
var check=0;

btn.addEventListener("click",function(){
    if(check==0){
        currentStatus.innerHTML="Request Sent Successfully"
        btn.innerHTML="Request Sent"
        currentStatus.style.color="green"
        check=1;
    }else{
        currentStatus.innerHTML="Stranger"
        btn.innerHTML="Add Friend"
        currentStatus.style.color=" rgb(65, 59, 59)"
        check=0;
    }
})
