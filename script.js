window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });


  
  window.addEventListener('load', ()=>{
    console.log(window.innerWidth)
    if(window.innerWidth<800){
    var aboutFlexWrapper = document.querySelector('.about-us-flex-wrapper');
    console.log(aboutFlexWrapper)
    

    }  else{
    console.log('it passeddddd')
  }
});