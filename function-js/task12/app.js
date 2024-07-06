// 12. Напишите функцию, которая принимает массив чисел и возвращает произведение всех 
// элементов.

const arr = [1, 2, 3, 4]

function multiplicationArr(arr) {
    const result = arr.reduce((sum, el) => sum *= el)
    return result
}

const result = multiplicationArr(arr)
console.log(result);