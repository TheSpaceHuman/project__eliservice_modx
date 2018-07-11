var swiper = new Swiper('.swiper-container');

$('[data-fancybox="gallery"]').fancybox({
  
});

var link = document.querySelector('.popup-services');
var popup = document.querySelector('.popup');
var close = document.querySelector('.popup--clouse');

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("popup--active");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--active")
});


