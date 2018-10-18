window.onload = function(){
    var slidewidth = this.document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    var i;
    for(var i in objs) {
        objs[i].style.width = slidewidth;
    }
}

function toggleMenu(){

    var menu = document.getElementById("menu");

    if (menu.style.display == 'none' || menu.style.display == ""){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }


}
