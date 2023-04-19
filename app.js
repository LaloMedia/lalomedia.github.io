hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active")
}


/* window.addEventListener('mousemove', (event) => { 
    // Mettre à jour la position du curseur en fonction de la position de la souris
    let cursor = document.querySelector('#cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });
   */


const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
})


