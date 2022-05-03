
const arrows = document.querySelectorAll(".arrow");
const movieKind = document.querySelectorAll(".movie-kind");

arrows.forEach((arrow,i)=>{
  const itemNumber = movieKind[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click",()=>{
    clickCounter++;
    if(itemNumber - (4 + clickCounter) >= 0){
        movieKind[i].style.transform = `translateX(${
            movieKind[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    }else{
        movieKind[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log(movieKind[i].querySelectorAll("img").length);
});

const iconball = document.querySelector(".iconball");
// const side = document.querySelector(".side");
iconball.onclick =()=>{
    document.body.style.backgroundColor ='white';
}


