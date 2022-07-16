
document.addEventListener('DOMContentLoaded', () => {

	const menuBtns = document.querySelectorAll('.menu__link');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.menu__dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('menu__link--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('menu__dropdown--active');
				}
			});

			drop.classList.toggle('menu__dropdown--active');
			currentBtn.classList.toggle('menu__link--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('menu__link--active');
			});

			drops.forEach(el => {
				el.classList.remove('menu__dropdown--active');
			});
		}
	});
});
