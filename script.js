const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', () => {
	const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
	const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

	noBtn.style.position = 'absolute';
	noBtn.style.left = randomX + 'px';
	noBtn.style.top = randomY + 'px';
});

const yesBtn = document.getElementById('yesBtn');
const content = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
	content.innerHTML = "<h1>وانا أحبك بعد XOXOXOXO</h1>";
});