function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY
   
    if (scrollValue < 150) {
        
        navbar.classList.remove('bgColor');
    } else {
        console.log('toto');
        navbar.classList.add('bgColor');
        
    }
}

window.addEventListener('scroll',changeBg);