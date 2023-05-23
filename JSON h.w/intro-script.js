// Домашнее задание

// 	1)

// 	Преобразуйте user в JSON и сохраните (выведите в console.log), 
// 	затем прочитайте JSON и сохраните в другую переменную (выведите в console.log)

// 	let user = {
// 	  name: "Василий Иванович",
// 	  age: 35
// 	};


// 	2) 
	
// 	напишем счетчик на localStorage - + / -
//         пусть в компоненте будет сам счетчик 
//         и будут кнопки имитирующие интерфейс localStorage (функция к каждой кнопке)
//         Все кнопки должны выводить в консоль сообщения. _Например
// 	setItem будет выводить в консоль что произошло сохранение и что именно сохранено._
	
//         setItem(key, value) – сохранить пару ключ/значение.
//         getItem(key) – получить данные по ключу key.
//         removeItem(key) – удалить данные с ключом key.
//         clear() – удалить всё.
//         key(index) – получить ключ на заданной позиции.
//         length – количество элементов в хранилище.
	

	
// 	*
// 	напишите togoList используя localStorage + JSON
// 	функции todoList - добавление, удаление ( * необязательно - вычеркивание, редактирование)

// 	Должна быть кнопка **сохранить todo list**
// 	Данные должны храниться в браузере и при перезагрузки страницы 
// 	загружаться актуальные с последнего сохранения (инициализация всего списка)



// let user = {
//  	name: "Василий Иванович",
//  	age: 35
//  	};

// let userJSON = JSON.stringify(user);
// console.log(userJSON);

// let userParsed = JSON.parse(userJSON)
// console.log(userParsed);



// 88888888888888888888888888
const counter = document.querySelector('.counter'),
				plus = document.querySelector('.plus'),
				minus = document.querySelector('.minus');

let stateComponent = localStorage.getItem('state') 
	? JSON.parse(localStorage.getItem('state'))
	: {                                                // модель
	count: 0,
	theme: 'black'
}
renderCounter()

function setCount(newValue) {         //контроллер 
	stateComponent = {
		...stateComponent,
		count: newValue
	}
	renderCounter()
}

function renderCounter() {             //представление
	counter.value = stateComponent.count
}




plus.addEventListener('click', () => setCount(stateComponent.count += 1)); 
minus.addEventListener('click', () => setCount(stateComponent.count -= 1));


function minusCount () {
	setCount(stateComponent.count -= 1)
}

const setBtn = document.querySelector('.set-btn'),
			getBtn = document.querySelector('.get-btn'),
			removeBtn = document.querySelector('.remove-btn'),
			clearBtn = document.querySelector('.clear-btn'),
			keyBtn = document.querySelector('.key-btn'),
			lengthBtn = document.querySelector('.length-btn');

setBtn.addEventListener('click', setItem);
getBtn.addEventListener('click', getItem);
removeBtn.addEventListener('click',removeItem );
clearBtn.addEventListener('click',clear );
keyBtn.addEventListener('click', key);
lengthBtn.addEventListener('click', getLength);


function setItem () {
	localStorage.setItem('state', JSON.stringify(stateComponent))
	console.log('сохранили пару ключ/значение.')
}

function getItem () {
	stateComponent = JSON.parse(localStorage.getItem('state'))
	console.log('получили данные по ключу key.')
}

function removeItem () {
	localStorage.removeItem('state')
	console.log('удалили данные с ключом key.')
}

function clear () {
	localStorage.clear()
	console.log('это ограбление нахуй')
}

function key () {
	for (let i = 0; i < localStorage.length; i++) {
		console.log(`получили ключ ${localStorage.key(i)} на заданной позиции ${i} со значением ${localStorage.getItem(localStorage.key(i))}.`)
	}
}

function getLength () {
	console.log('количество элементов в хранилище: ' + localStorage.length)
} 