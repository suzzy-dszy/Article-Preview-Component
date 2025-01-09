var authorSection = document.querySelector('.card__content--author');
var shareSection = document.querySelector('.card__content--share-menu');

function toggleShareMenu() {
  authorSection.classList.toggle('active');
  shareSection.classList.toggle('active');
}
