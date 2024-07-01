// 6. Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
// элементов.
const valueArr = [2, 2, 2]

function avgValue(arr) {
    const result = arr.reduce(function (el, sum) {
        return sum = (sum + el) / (arr.length)
    }, 0)
    
    return result
}
const result = avgValue(valueArr)
console.log(result);