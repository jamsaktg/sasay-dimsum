// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika dimsum menu di klik
document.querySelector('#dimsum-menu').onclick = () => {
 navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const dimsum = document.querySelector('#dimsum-menu');

document.addEventListener('click',function(e){
    if(!dimsum.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
