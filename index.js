let c=document.getElementsByClassName('points')
let f= document.getElementById('frame')

for(let i of c){
    i.addEventListener('click',()=>{
        // console.log(i.innerText)
        if(i.innerText == 'Skills'){
            f.style.transform = 'translate(0px)'
        }else if(i.innerText == 'Education'){
            f.style.transform = 'translate(-400px)'
        }else{
            f.style.transform = 'translate(-800px)'
        }
        
    })
}

let p = document.getElementsByClassName('points');
let F = document.getElementById('frame');
for (let i of c) {  
  i.addEventListener('click', () => {    
    // Dynamically get the width of one slide 
       let slideWidth = document.querySelector('#ski').offsetWidth;   
     if (i.innerText.trim() === 'Skills') {     

    f.style.transform = `translate(0px)`;     
     } else if (i.innerText.trim() === 'Education') {   
     f.style.transform = `translate(-${slideWidth}px)`;    
     } else {    
     f.style.transform = `translate(-${slideWidth * 2}px)`;      
     }   
     });
    }
// -------------responsive nav bar-----------------
const nav = document.getElementById("navLinks");
const burger = document.getElementById("hamburger");
let open = false;

function toggleMenu() {
  open = !open;
  if (open) {
    nav.classList.add("show");
    burger.innerHTML = "✖";
  } else {
    nav.classList.remove("show");
    burger.innerHTML = "☰";
  }
}

// Reset menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    nav.classList.remove("show");
    burger.innerHTML = "☰";
    open = false;
  }
});

// Show button when user scrolls down
window.onscroll = function() {
  const btn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll smoothly to top
document.getElementById("goTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
