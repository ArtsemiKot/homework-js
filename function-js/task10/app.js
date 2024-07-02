//10. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
//содержащий только четные числа.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
function doArr(arr) {
    const result = arr.filter(el => el % 2 == 0)
    return result
}
const result = doArr(arr)
console.log(result);