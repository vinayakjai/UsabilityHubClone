const togglebutton=document.getElementById('nav-toggle');
const navLinks=document.getElementById('nav-links');
togglebutton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})