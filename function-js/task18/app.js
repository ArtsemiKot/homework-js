// 18. Напишите функцию, которая принимает строку и возвращает новую строку, где все 
// пробелы заменены на дефисы.

function changeStr(str) {
    return str.split(' ').join('-')
}

const result = changeStr('a b c')

console.log(result);