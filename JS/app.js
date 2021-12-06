const btn = document.querySelector('.mobile-burger__btn');
const burger = document.querySelector('.mobile-menu');
const burgerArea = document.querySelector('.burger-area');

btn.addEventListener('click', () => {
  if (!burger.classList.toggle('mobile-menu--active') || !burgerArea.classList.toggle('burger-area--active')) {
    burger.classList.remove('mobile-burger--active');
    burgerArea.classList.remove('burger-area--active');
    document.body.style.overflow = 'auto';
  } else {
    burger.classList.add('mobile-burger--active');
    burgerArea.classList.add('burger-area--active');
    document.body.style.overflow = 'hidden';
  }
});