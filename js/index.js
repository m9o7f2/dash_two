// side width

let side = document.querySelector(".side");
(function(){
    document.querySelectorAll(".one").forEach(el => {
        el.firstElementChild.nextElementSibling.style.color = el.getAttribute("data-color")
    })

    document.querySelectorAll(".arrow").forEach(img => {
        img.style.transform = "rotate(" + img.getAttribute("data-ang")+")";
    })

})();

(function(){
    document.querySelectorAll(".cell .state span").forEach(el => {
        if(el.textContent == "Cancelled" || el.textContent == "cancelled"){
            el.style.color = "#F66C25";
            el.style.backgroundColor = "#FAEBE3";
        }else if(el.textContent == "Booked" || el.textContent == "booked"){
            el.style.color = "#EAF7FF";
            el.style.backgroundColor = "#3DA1F7";
        }else if(el.textContent == "Done" || el.textContent == "done"){
            el.innerHTML = "<span class ='mark'>✔</span>Done"
            el.style.color = "#4E9E66";
            el.style.backgroundColor = "#E4F4ED";
        }
    });

})()
// toggle
document.querySelector(".tog").onclick = function(){
    this.parentNode.classList.toggle("open");
    document.body.classList.toggle("pad-l")
}
if(window.innerWidth < 1150){
    document.querySelector(".overlay").classList.remove("d-none");
}else{
    document.querySelector(".overlay").classList.add("d-none");
}

window.onresize = function(){
    if(window.innerWidth < 1150){
        document.querySelector(".overlay").classList.remove("d-none");
    }else{
        document.querySelector(".overlay").classList.add("d-none");
    }   
}