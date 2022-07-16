const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.header__nav');
const menuLink = document.querySelectorAll('.menu__link');
const bodyLock = document.querySelector('body');

buttonMenu.onclick = function () {
	menuActive.classList.toggle('header__nav--active');
	buttonMenu.classList.toggle('burger--active');
	bodyLock.classList.toggle('lock');
};

menuLink.forEach(el => {
	el.addEventListener('click', (e) => {
		menuActive.classList.remove('header__nav--active');
		buttonMenu.classList.remove('burger--active');
		bodyLock.classList.remove('lock');
	});
});
