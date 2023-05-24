// Реализуйте класс Student, 
// который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: 
// name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), 
// year (год поступления в вуз, не наследуется от User).

// Класс должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента.

// Также класс должен иметь метод getCourse() (не наследуется от User), 
// который будет выводить текущий курс студента (от 1 до 5). 

// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.





// Вот так должен выглядеть класс User, от которого наследуется наш Student:

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}
	getCourse() {
		let currentYear = new Date().getFullYear();
		return currentYear - this.year;
	}
}

// Вот так должен работать наш класс:

let student = new Student('Иван', 'Иванов', 2020);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2020
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2023







// Найти максимальное число в массиве, содержащем числа или другие массивы чисел
// Решите это итеративно (через цикл) и отдельно затем рекурсивно.

let numbers = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]


const getMaxNumForLoop = arrNum => {
	let result = 0;
	for (let i = 0; i < arrNum.length; i++) {
		const firstLevelIter = arrNum[i];
		if (Array.isArray(firstLevelIter)) {
			for (let j = 0; j < firstLevelIter.length; j++) {
				const secondLevelIter = firstLevelIter[j];
				if (Array.isArray(secondLevelIter)) {
					for (let g = 0; g < secondLevelIter.length; g++) {
						const	thirdLevelIter = secondLevelIter[g];
						if (thirdLevelIter > result) {
							result = thirdLevelIter; 			
						}
					}
				} else {
					if (secondLevelIter > result) {
						result = secondLevelIter; 			
					}
				}
			}
		} else {
			if (firstLevelIter > result) {
				result = firstLevelIter; 			
			}
		}
	}
	return result;
}
console.log(getMaxNumForLoop(numbers))


const getMaxNumForRec = arrNum => {
	let result = 0;

	for (let i = 0; i < arrNum.length; i++) {

		if (Array.isArray(arrNum[i])) {
			let iterResult = getMaxNumForRec(arrNum[i])
			if (iterResult > result) result = iterResult 
		} else { 
			if (arrNum[i] > result) result = arrNum[i]
		}

	}

	return result;
}
console.log(getMaxNumForRec(numbers))
