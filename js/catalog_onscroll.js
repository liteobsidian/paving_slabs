//Visible Catalog-item on scroll
let onVisible = document.querySelectorAll('.catalog-item');

console.log (onVisible);

for (let i=0; i<onVisible.length; i++) {
	let Visible = (target) => {
		// Позиции элемента по оси Y
		let targetPosition = {
			top: window.scrollY + target.getBoundingClientRect().top,
			bottom: window.scrollY + target.getBoundingClientRect().bottom
		};
		// Получаем позиции окна по оси Y
		let windowPosition = {
			top: window.scrollY,
			bottom: window.scrollY + document.documentElement.clientHeight
		};
		
		if (targetPosition.top >= windowPosition.top &&
			targetPosition.top <= windowPosition.bottom)  { 
			(i+1)%2===0?onVisible[i].classList.add('fadeInRight'):onVisible[i].classList.add('fadeInLeft')
		};
	};
	window.addEventListener('scroll', function() {
		Visible (onVisible[i]);
	});	
	Visible (onVisible[i]);
};
