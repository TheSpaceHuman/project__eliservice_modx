var swiper = new Swiper('.swiper-container');

$('[data-fancybox="gallery"]').fancybox({
  
});
/* Modal-1 */
var link = document.querySelector('.popup-services-1');
var popup = document.querySelector('.popup');
var close = document.querySelector('.popup--clouse');
var closeFon = document.querySelector('.black-fon');

closeFon.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("popup--active");
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("popup--active");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup--active")) {
      popup.classList.remove("popup--active");
    }
  }
});
/* Modal-2 */
/* var link2 = document.querySelector('.popup-services-2');
var popup2 = document.querySelector('.popup');
var close2 = document.querySelector('.popup--clouse');
var closeFon2 = document.querySelector('.black-fon');

closeFon2.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

close2.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup3.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup3.classList.contains("popup--active")) {
      popup3.classList.remove("popup--active");
    }
  }
}); */

/* Modal-3 */
/* var link3 = document.querySelector('.popup-services-3');
var popup3 = document.querySelector('.popup');
var close3 = document.querySelector('.popup--clouse');
var closeFon3 = document.querySelector('.black-fon');

closeFon3.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

close3.addEventListener("click", function(evt){
  evt.preventDefault();
  popup3.classList.remove("popup--active");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup3.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup--active")) {
      popup3.classList.remove("popup--active");
    }
  }
}); */

/* Modal-4 */
/* var link4 = document.querySelector('.popup-services-4');
var popup4 = document.querySelector('.popup');
var close4 = document.querySelector('.popup--clouse');
var closeFon4 = document.querySelector('.black-fon');

closeFon4.addEventListener("click", function(evt){
  evt.preventDefault();
  popup4.classList.remove("popup--active");
});

close4.addEventListener("click", function(evt){
  evt.preventDefault();
  popup4.classList.remove("popup--active");
});

link4.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup4.classList.add("popup--active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup4.classList.contains("popup--active")) {
      popup4.classList.remove("popup--active");
    }
  }
});
 */


