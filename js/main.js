window.addEventListener("scroll", function(){
    var y= this.window.pageYOffset;
    this.document.getElementById("").style.backgroundPositionY= (y*-0.5)+"px";
});

AOS.init({
    duration: 2000,
});



