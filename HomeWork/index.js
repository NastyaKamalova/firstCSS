// 1)	Выведите чётные числа
// 			При помощи цикла for выведите чётные числа от 2 до 10.
// 			Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)

for (let i=2; i <= 10; i++){
	if (i % 2 == 0){
		console.log(i);
	}
}

// 		1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// 		for (let i = 0; i < 3; i++) {
// 		  console.log( `number ${i}!` );
// 		}

  let i = 0;
  while (i < 3) {
 		console.log( `number ${i}!` );
			i++;
 }

// 		2) 
// 		Перепишите код в двух синтаксисах (одну можно закомментировать) Function Expression и стрелочной функцией
// 		Сейчас в функцию ask передаются анонимные каллбек функции, дайте им имена и передавайте как каллбек через переменную описания.

// function ask(question, answer, yes, no) {
// 		  question();
// 		  if (answer) yes()
// 		  else no();
// 		}

// 		ask(
// 		  function() { console.log("Вы согласны?"); },
// 		  true,
// 		  function() { console.log("Вы согласились."); },
// 		  function() { console.log("Вы отказались."); }
// 		);

const ask = (question, answer, yes, no) => {
		question();
		if (answer) yes();
		else no();
		}

	const question = function() { console.log("Вы согласны?"); }	
	const yes = function() { console.log("Вы согласились."); }
	const no = function() { console.log("Вы отказались."); }

	ask(question, true, yes, no)


