window.addEventListener('resize', function(){

  if (window.innerWidth < 850) {
      menu = document.querySelector('#menu');
      menu.classList.add('mobile-menu');
  }

})