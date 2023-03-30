// 1)	
// 	Создайте input type text и три кнопки
// 	кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
// 	1. Кнопка "Очистить input" (удалять содержимое value тега input)
// 	2. Кнопка заблокировать инпут (disabled setAttribute)
// 	3. Кнопка разблокировать инпут (disabled removeAttribute)
// 	или input.disabled = true/false;


let input = document.querySelector('.input');
let clearButton = document.querySelector('.clear-button');
let blockButton = document.querySelector('.block-button');
let unblockButton = document.querySelector('.unblock-button');

const clearInput = function(event) {
	input.value = "";
}

const blockInput = function(event) {
	input.setAttribute('disabled', true);
}

const unblockInput = function(event) {
	input.removeAttribute('disabled');
}

clearButton.addEventListener('click', clearInput);
blockButton.addEventListener('click', blockInput);
unblockButton.addEventListener('click', unblockInput);



// 2) 
// 	Создайте в HTML два текстовых инпута и кнопку
// 	Напишите функцию, которая будет по нажатию на кнопку
// 	менять содержимое инпутов (value) местами



let inputText1 = document.querySelector('.input-text-1');
let inputText2 = document.querySelector('.input-text-2');
let switchButton = document.querySelector('.switch-button');

switchButton.addEventListener('click', switchValues)

function switchValues() {
	let clipboard = inputText2.value;
	inputText2.value = inputText1.value;
	inputText1.value = clipboard;
}













