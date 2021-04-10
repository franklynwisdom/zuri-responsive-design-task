const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navLinksMobile = document.getElementById("nav-links-mobile");


console.log(hamburger, close);
hamburger.addEventListener('click' ,showMenu);
close.addEventListener('click' ,closeMenu);


function showMenu(){
    if(navLinksMobile.style.display==='none'){
        navLinksMobile.style.display='block';
    }else{
        navLinksMobile.style.display='none';
    }
}
function closeMenu(){
    if(navLinksMobile.style.display==='block'){
        navLinksMobile.style.display='none';
    }
}