// header
window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY>0);
})

// nav
function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



  
  // Store

  let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.stop .box-work .box')];
   for (var i = currentItem; i < currentItem + 10; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 10;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

function functio(small){
   var full = document.getElementById("imagebox")
   full.src = small.src
}