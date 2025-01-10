var authorSection = document.querySelector('.card__content--author');
var shareSection = document.querySelector('.card__content--share-menu');
var shareButton1 = document.querySelector('.card__content--share-button-1');
var shareButtonIcon1 = document.querySelector('.card__content--share-icon-1');

function toggleShareMenu() {
  authorSection.classList.toggle('active');
  shareSection.classList.toggle('active');
}

function invertBtnColor() {
  shareButton1.classList.toggle('invert-btn-colour');
  shareButtonIcon1.classList.toggle('invert-icon-colour');
}
