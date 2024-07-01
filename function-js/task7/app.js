// 7. Напишите функцию, которая принимает массив строк и возвращает массив только тех
// строк, которые содержат больше пяти символов.

function returnArrStr(arr) {
    const result = arr.filter((el) => el.length > 5)
    return result
}
const result = returnArrStr(['Crazy', 'I am', 'Javascript', 'Developer'])
console.log(result);