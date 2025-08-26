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

// Hamburger toggle
// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbtn = document.getElementById("navbtn");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    navbtn.classList.add("active");
});

// Close button
closeBtn.addEventListener("click", () => {
    navbtn.classList.remove("active");
});