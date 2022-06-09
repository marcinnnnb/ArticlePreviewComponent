const arrow = document.querySelector('.footer__share');
const share = document.querySelector('.footer__share-details');

arrow.addEventListener('click', function () {
  share.classList.toggle('show');
});
