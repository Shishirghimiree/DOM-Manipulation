var main = document.querySelector("#main")
var cursorMove = document.querySelector(".cursor")

main.addEventListener("mousemove",function(details){
    cursorMove.style.left = details.x+"px"
    cursorMove.style.top = details.y+"px"
})