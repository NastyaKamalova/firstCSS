/*Реализовать решение задачи в JS: 
- У нас есть 100 (создать константу)
- Цена помидоров на рынке - 10 (создать константу)
- Цена огурцов на рынке - 5 (создать константу)
- Цена яблок на рынке - 15 (создать константу)
- Оставшиеся деньги потратим на орехи (создать переменную)

- Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
- оставшиеся деньги потратили на орехи (присвоить значение переменной)

- сколько денег мы потратили на орехи? (вывести переменную в консоль)
- на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)

- в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'
*/ 


const mony = 100;
const tomatoes = 10;
const cucumbers = 5;
const apples = 15;
let MonyForNuts;
let MonyForVegetable;
MonyForVegetable = 2 * tomatoes + 2 * cucumbers + 2 * apples; 
MonyForNuts = mony - MonyForVegetable;
console.log ("На орехи потрачено", MonyForNuts, "денег банка приколов");
console.log ("На орехи потрачено больше?", MonyForVegetable < MonyForNuts);
console.log ("На орехи потрачено меньше?",MonyForVegetable > MonyForNuts);
console.log ("Больше денег банка приколов потратили на фрукты и овощи. Как неожиданно!");



/*
const cash = 100;
const priceTomato = 10;
const priceCucumber = 5;
const priceAppel = 15;
let costNuts;
let costVegetable;
costVegetable = 2*(priceAppel + priceTomato + priceCucumber);
costNuts = cash - costVegetable;
console.log('На орехи потрачено:', costNuts);
console.log('Неужели на орехи потратили больше?!', costNuts > costVegetable); 
if (costVegetable > costNuts) {
	console.log('Больше потратили на фрукты и овощи');
} else {
	console.log('Больше потратили на орехи');
}
*/

