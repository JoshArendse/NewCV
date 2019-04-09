window.addEventListener("scroll", function(){
    var y= this.window.pageYOffset;
    this.document.getElementById("parallax").style.backgroundPositionY= (y* -0.5)+"px";
});

AOS.init({
    duration: 1200
});



