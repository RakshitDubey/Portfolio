// Navtoggle 
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.navlist');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
});


   
