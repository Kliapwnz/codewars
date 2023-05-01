//1. Создайте функцию, которая будет принимать массив элементов и функцию обратного вызова (callback), и для каждого элемента массива
// будет применять функцию обратного вызова(функция вывода).
// const applyCallback = (array, callBack) => {
//     array.forEach((el)=>{
//         callBack(el)
//     })
// }
// const callBack = (array) => {
//     console.log(array)
// }
// const array = ["hello", true, 3];
// applyCallback(array, callBack);


//2 Напишите функцию, которая принимает массив чисел и функцию обратного (которая умножает каждый элемент массива на 2) вызова и возвращает новый массив, содержащий результат применения функции
// обратного вызова к каждому элементу исходного массива.
// const applyCallback = (array, callback) => array.map(el =>
//     callback(el))
//
// const array = [1, 2, 3];
// const callBack = (el) => el * 2
//
// const callbackFunc = applyCallback(array, callBack); // что-то нужно прописать
// console.log(callbackFunc);// [2, 4, 6]


//3 Создайте функцию, которая принимает два числа и функцию обратного вызова, которая выполняет арифметическую операцию  сложения между ними.
// const applyOperation = (x, y, operation) => {
//     return  operation(x, y)
// }
// const add = (x, y) => {
//     return x + y
// };
// const result = applyOperation(12, 5, add);
// console.log(result);


// 4 Создайте функцию, которая принимает массив строк и функцию обратного вызова, которая фильтрует строки, если длинна строки меньше 7.
const filterStrings = (array, callback) => {
    return  array.filter(el => {callback(el)})
}
const array = ['hello', 'world', 'javascript', 'callback'];
const sortFunc = (el) => {
    return el.length < 7
}//написать функцию
const filtered = filterStrings(array, sortFunc); // что- добавить
console.log(filtered);


//5 Напишите функцию, которая принимает два массива и функцию обратного вызова, которая складывает элементы двух массивов.
//const zipArrays = (array1, array2, callback) => {}
//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];
//const zippedFunc = ;//написать функцию
//console.log(zipArrays(array1, array2, zippedFunc))


//6 Создайте функцию, которая принимает массив объектов и функцию обратного вызова, которая возвращает массив значений свойства age.
// const pluck = (array, property) => {}
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 20 }
// ];
// console.log(pluck(people, 'age'));


// 7. Создать функцию которая будет проверять является ли строка полиндромом
//Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
// const isPolindrom = (word) => {}
// console.log(isPolindrom("шабаш"))


// 8. Вывести самое короткое слово в консоль
// const findShort = (sentence) => {}
// console.log(findShort('The smallest word in sentence'))


// 9. Вывести в консоль инициалы (Александр Петров - А.В.)
//const toInitials = (name) = {}
// console.log(toInitials("Bill gates"))


// 10. Создание дубликатов символов строки ("abcd") => "A-Bb-Ccc-Dddd"
// const duplicate = (str) => {}
// console.log(duplicate('abcd'));


// 11. Отформатировать цифры в телефонный номер (123456789) => (123) 456-789
// const phoneNumber = (number) => {}
// console.log(phoneNumber('123456789'))

 