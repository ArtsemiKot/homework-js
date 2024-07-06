// 15. Напишите функцию, которая принимает массив строк и возвращает новую строку, 
// состоящую из элементов массива, соединенных через запятую

const arr = ['i', 'am', 'JS', 'Developer']

function joinArr(arr) {
    return arr.join(',')
}

const result = joinArr(arr)
console.log(result);