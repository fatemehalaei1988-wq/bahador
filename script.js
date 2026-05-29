window.addEventListener("DOMContentLoaded",()=>{

  const cursor =
  document.querySelector(".custom-cursor");

  if(!cursor) return;

  document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

  });

});

const menuBtn=
document.querySelector(".menu-btn");

const mobileMenu=
document.querySelector(".mobile-menu");

menuBtn.onclick=()=>{

  mobileMenu.classList.toggle("active");

};

document
.querySelectorAll(".faq-question")
.forEach(btn=>{

  btn.addEventListener("click",()=>{

    btn.parentElement
    .classList.toggle("active");

  });

});

const popup=
document.querySelector(".video-popup");

document
.querySelector(".close-popup")
.onclick=()=>{

  popup.style.display="none";

};