/** Напишите следующий небольшой тест
	Он выглядит как один блок с вопросом и тремя вариантами ответа

	варианты ответа реализованы через радио-кнопку (выбрать можно только один)
	radioButton.checked может быть true или false

	После выбора становится доступна кнопка "проверить" (до этого она disabled)

	После нажатия на кнопку вы скрываете предыдущий вопрос и показываете следующий.

	В конце после последнего вопроса вы должны отобразить текст, который сообщит 
	на сколько вопросов пользователь ответил правильно.

	Это ознает, что вы должны собирать ответы пользователя, например в массив, и затем
	сравнить его с правильными ответами и показать сколько правильно, сколько нет.

	JavaScript это Java?
		Нет.
		Да.
		Возможно.

	проверить

	Сколько параментров можно передать в фукнцию?
		Сколько указано при ее создании.
		Минимум один.
		Сколько угодно.

	проверить

	Массивы это объекты?
		Не совсем.
		Нет.
		Да, это спископодобные объекты.

	проверить
 */

const initialData = [
	{
		id: 1,
		question: "javascript is java?",
		answers: [
			{text: "no", isCorrect: true},
			{text: "yes", isCorrect: false},
			{text: "maybe", isCorrect: false},
		]
	},
	{
		id: 2,
		question: `how many parameters can be sent to function?`,
		answers: [
			{text: "as much as specified at its creation", isCorrect: true},
			{text: "at least one", isCorrect: false},
			{text: "as much as you want", isCorrect: false},
		]
	},
	{
		id: 3,
		question: "arrays are objects?",
		answers: [
			{text: "not exactly", isCorrect: false},
			{text: "not at all", isCorrect: false},
			{text: "yes, they are list-like objects", isCorrect: true},
		]
	}
];

const userAnswers = [],

	box = document.querySelector(".box"),
	question = box.querySelector(".question"),
	responseOptions = box.querySelectorAll(".response-option"),
	inputs = box.querySelectorAll(".radio"),
	checkBtn = box.querySelector(".test-btn"),
	testResult = box.querySelector(".test-result");


function fillData(data) {
	box.dataset.id = data.id
	question.textContent = data.question;
	responseOptions.forEach((option, index) => {option.textContent = data.answers[index].text});
	inputs.forEach((input, index) => {
		input.value = data.answers[index].isCorrect;
		input.checked = false;

	});
	checkBtn.setAttribute('disabled', true)
};

fillData(initialData[0]);

box.addEventListener('click', boxHandler);

function boxHandler(event) {
	const target = event.target,
		isRadio = target.classList.contains("radio") || target.classList.contains("response-option");
		isBtn = target.classList.contains("test-btn"),
		notDisabled = !target.hasAttribute("disabled"),
		goLoop = Number(box.dataset.id) <= initialData.length;

	if (isRadio) checkBtn.removeAttribute('disabled');

	if (isBtn && notDisabled && goLoop) qLoop();
}



function qLoop() {
	const stopLoop = Number(box.dataset.id) === initialData.length;
	
	if (userAnswers.length < initialData.length) {
		inputs.forEach((input, index) => input.checked ? userAnswers.push(input.value) : undefined);
	}

	if (!stopLoop) fillData(initialData[box.dataset.id]);

	if (stopLoop) {
		let trueCounter = 0;
		userAnswers.forEach(answer => answer ? trueCounter++ : undefined);
		testResult.textContent = 'Вы ответили правильно на ' + trueCounter + ' вопросов из ' + userAnswers.length;
	}
}
/** Нужен обработчик клика на box — смотрим, на что кликнули.
 * Если один из инпутов checked — убираем с button disabled.


 * Если event.target == button (по классу проверить?) && button == disabled,


 * 	если box.dataset.id < initialData.id 
 * 		1) userAnswers.push (активный инпут dataset.correct)
 * 		2) fillData(initialData[box.dataset.id])
 * 		3) заблокировать кнопку
 * 	иначе выводим итог в surveyResult, проходя по массиву ответов даем кол-во true
 * */
