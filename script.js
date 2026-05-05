const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var cursor = document.querySelector("#cursor")

document.addEventListener("mousemove", function(e){
   cursor.style.left = e.clientX + "px"
   cursor.style.top = e.clientY + "px"
})

/*elemC.addEventListener("mousemove", function(e){
    fixed.style.left = e.x + "px"
    fixed.style.top = e.y + "px"
})*/
