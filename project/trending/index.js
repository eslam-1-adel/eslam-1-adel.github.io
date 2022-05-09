var i =0;
var slidesImage = ["images/venom.jpg","images/spider.jpeg","images/bbbb.jpeg","images/alice slider.jpg","images/hotel.jpg","images/aq.png"]
var slideShow = function () {
document.slideshow.src = slidesImage[i];
if ( i < slidesImage.length-1 )
{  i++;
}
else{
    i=0;
}

setTimeout("slideShow()", 2000);
}
slideShow();
