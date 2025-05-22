const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const copyrightElement = document.querySelector('.footer-rights');

function toggleMenu() {
	const isActive = burgerMenu.classList.contains('active');
	
	if(isActive) {
		burgerMenu.classList.remove('active');
		mobileMenu.classList.remove('active');
		overlay.classList.remove('active');
		document.body.classList.remove('popup-open');
	} else {
		burgerMenu.classList.add('active');
		mobileMenu.classList.add('active');
		overlay.classList.add('active');
		document.body.classList.add('popup-open');
	}
}

burgerMenu.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);



if (copyrightElement) {
	const currentYear = new Date().getFullYear();
	copyrightElement.textContent = `© ${currentYear} Pinko Казино, Все права защищены`;
}