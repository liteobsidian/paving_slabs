
let screenWidth = document.documentElement.clientWidth;

//Скрипт для навбара
window.addEventListener('load', function ButtonsProductSlider () { 
	if (screenWidth < 713) {
		//Скрпт для кнопки адреса
		let addressImg = document.getElementById('adress');
		let headingAddress = document.querySelector('.adress h3');
		let addressBox = document.querySelector('.adress');
		addressImg.onclick = function clickMagic () {
			headingAddress.style.display = 'block';
			addressImg.style.display = 'none';
			addressBox.style.flex = 2;
		};
		headingAddress.onclick = function secondClick () {
			addressImg.style.display = 'block';
			headingAddress.style.display = 'none';
			addressBox.style.flex = 1;
		};
		
		//Скрипт для кнопки с номером телефона
		let telephoneImg = document.getElementById('telephone');
		let telephoneNumber = document.querySelector('.telephone h3');
		telephoneImg.onclick = function telclickMagic () {
			telephoneNumber.style.display = 'block';
			telephoneImg.style.display = 'none';
		};
		telephoneNumber.onclick = function telsecondClick () {
			telephoneImg.style.display = 'block';
			telephoneNumber.style.display = 'none';
		};
		
		//Скрипт для кнопки меню
		let menu = document.querySelector('.mobile__nav');
		let navLink = document.querySelector('.nav_wrapper');
		let flag = false;
		menu.onclick = function openMenu () {
			flag = !flag;
			if (flag === true) {
				navLink.style.display = 'flex';
				navLink.style.flexFlow = 'column';
				menu.style.transform = 'rotate(-90deg)';
			} else {
				navLink.style.display = 'none';
				menu.style.transform = 'none';
			}
		};
	};
});

//Скрипт для 1го слайдера

window.onload = function productSliderFunction () {
	let nextProduct = document.getElementById('right');
	let prevProduct = document.getElementById('left');
	let firstItem = document.getElementById('first');
	let leftMargin = 0;
	let typeScreenProductCoeff;
	let marginStep;
	if (screenWidth < 550) {
		typeScreenProductCoeff = 1;
		marginStep = 60;
	} else if (screenWidth < 713) {
		typeScreenProductCoeff = 2;
		marginStep = 35;
	} else {
		typeScreenProductCoeff = 3;
		marginStep = 23;
	};
	let maxMargin = (document.querySelectorAll('.product__item').length -typeScreenProductCoeff)*marginStep;
	let NextMagic = () => {
		leftMargin < maxMargin ? leftMargin = leftMargin+marginStep
		: leftMargin = 0;
		firstItem.style.marginLeft = '-'+leftMargin+'vw';
	};
	let PrevMagic = () => {
		leftMargin === 0 ? leftMargin = maxMargin : 
		leftMargin = leftMargin-marginStep;
		firstItem.style.marginLeft = '-'+leftMargin+'vw';
	};
	nextProduct.onclick = NextMagic;
	prevProduct.onclick = PrevMagic;
};

//Скрипт для 2го слайдера
window.addEventListener('load', function ButtonsProductSlider () {
	let reviewLeft = document.getElementById('reviewLeft');
	let reviewRight = document.getElementById('reviewRight');
	let firstReview = document.getElementById('firstReview');
	let marginLeft = 0;
	let lastItemRemove = 1;
	let marginStep;
	screenWidth < 713 ? marginStep = 90 : marginStep = 80;
	let maxMargin = (document.querySelectorAll('.review').length -lastItemRemove)*marginStep;
	let NextReview = () => {
		marginLeft < maxMargin ? marginLeft = marginLeft+marginStep:
		marginLeft = 0;
		firstReview.style.marginLeft = '-'+marginLeft+'vw';
	};
	let PrevReview = () => {
		marginLeft===0 ? marginLeft = maxMargin:
		marginLeft = marginLeft-marginStep;
		firstReview.style.marginLeft = '-'+marginLeft+'vw';
	};
	reviewRight.onclick = NextReview;
	reviewLeft.onclick = PrevReview;
});

//Функция для карточки товара

let overColorC = 1;
let overStainedC = 1;
let coastElem = document.getElementById('dynamicCoast');
window.addEventListener('load', function ProductCardFunction () {
	let amount = document.getElementById('amount');
	let btnRed = document.getElementById('red');
	let btnGreen = document.getElementById('green');
	let btnGrey = document.getElementById('grey');
	let colorRedFlag = false;
	let colorGreenFlag = false;
	let colorGreyFlag = false;
	let FullStained = document.getElementById('FullStained');
	let HalfStained = document.getElementById('HalfStained');
	let FullFlag = false;
	let HalfFlag = false;
	const coast = Number(document.getElementById('dynamicCoast').textContent);
	let summ;
	let colorCoeff = 1;
	let stainedCoeff = 1;
	let changeCoast = () => {
		summ = coast * colorCoeff * stainedCoeff * amount.value;
		coastElem.innerHTML = summ;
        overStainedC = stainedCoeff;
        overColorC = colorCoeff;
	};
	let RedFlag = () => {
		colorRedFlag = true;
		colorGreenFlag = false;
		colorGreyFlag = false;
		colorCoeff = 1;
		btnRed.style.outline = '2px solid black';
		btnGreen.style.outline = 'none';
		btnGrey.style.outline = 'none';
		changeCoast ();
	};
	let GreenFlag = () => {
		colorRedFlag = false;
		colorGreenFlag = true;
		colorGreyFlag = false;
		colorCoeff = 1.1;
		btnRed.style.outline = 'none';
		btnGreen.style.outline = '2px solid black';
		btnGrey.style.outline = 'none';
		changeCoast ();
	};
	let GreyFlag = () => {
		colorRedFlag = false;
		colorGreenFlag = false;
		colorGreyFlag = true;
		colorCoeff = 1.2;
		btnRed.style.outline = 'none';
		btnGreen.style.outline = 'none';
		btnGrey.style.outline = '2px solid black';
		changeCoast ();
	};
	let getFullFlag = () => {
		FullFlag = true;
		HalfFlag = false;
		stainedCoeff = 1;
		FullStained.style.outline = '3px solid red';
		HalfStained.style.outline = 'none';
		changeCoast ();
	};
	let getHalfFlag = () => {
		FullFlag = false;
		HalfFlag = true;
		stainedCoeff = 1.2;
		FullStained.style.outline = 'none';
		HalfStained.style.outline = '3px solid red';
		changeCoast ();
	};
	btnRed.onclick = RedFlag;
	btnGreen.onclick = GreenFlag;
	btnGrey.onclick = GreyFlag;
	FullStained.onclick = getFullFlag;
	HalfStained.onclick = getHalfFlag;
	amount.addEventListener("change", changeCoast);
});

//Модальные окна

let orderBtn = document.querySelector('#orderBtn');
let closeWindow1 = document.querySelector('#closeModalone');
let closeWindow2 = document.querySelector('#closeModaltwo');
let modalForm = document.querySelector ('.form-data');
let cardTitle = document.querySelector('.card-title').textContent;

//Скрипт для axios формы и mail.php
modalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.querySelector('#userSelect').value = cardTitle +' количество: '+ amount.value +' цвет: '+document.querySelector('#prColor').textContent+ ' прокрас: '+document.querySelector('#prStained').textContent+' цена: '+coastElem.textContent;
    let elem = e.target
    let formData = {
        name: elem.querySelector('[name="user_name"]').value,
        phone: elem.querySelector('[name="telephone"]').value,
        item: elem.querySelector('[name="user_item"]').value,
    };
	//axios
    axios.post('https://trywrap.ru/paving/mail.php', {
        'user_name': formData.name,
        'telephone':formData.phone,
        'user_item':formData.item,
    }).then(function(res){
        console.log(res)
    }).catch(function(error){
        alert(error)
    })
    
});

//открытие, закрытие модалок; перенос параметров в модалки

let closeModals = () => {
    document.querySelector('.modals').style.display = 'none';
};

let paramTransModal = () => {
    document.querySelector('#prName').innerText = cardTitle;
    document.querySelector('#prAmount').innerText = amount.value;
	//Условие цвета
    overColorC === 1 ? document.querySelector('#prColor').innerText = 'красный' : overColorC === 1.1 ? 
	document.querySelector('#prColor').innerText = 'зелёный' : 
	document.querySelector('#prColor').innerText = 'серый';
    //Условие прокраса
    overStainedC === 1 ? 
	document.querySelector('#prStained').innerText = 'полный' : 
	document.querySelector('#prStained').innerText = 'частичный';
    
    document.querySelector('#modalCoast').innerText = coastElem.textContent;
};

let openModals = () => {
    document.querySelector('.modals').style.display = 'block';
    document.querySelector('.modal--2').style.display = 'none';
    document.querySelector('.modal--1').style.display = 'block';
    paramTransModal ();
};

let openModalTwo = () => {
    document.querySelector('.modal--1').style.display = 'none';
    document.querySelector('.modal--2').style.display = 'block';
    document.querySelector('.modals').style.display = 'block';
};
orderBtn.onclick = openModals;
closeWindow1.onclick = closeModals;
closeWindow2.onclick = closeModals;
modalForm.onsubmit = openModalTwo;