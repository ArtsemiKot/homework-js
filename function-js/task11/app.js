// 11. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
function doSumArr(arr) {
    const result = arr.reduce((el, sum) => sum += el, 0)
    return result
}
const result = doSumArr(arr)
console.log(result);