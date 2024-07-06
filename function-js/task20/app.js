// 20. Напишите функцию, которая принимает массив строк и возвращает массив тех строк, 
// которые начинаются с буквы 'A'.

const arr = ['A', 'Ab', 'Abc', 'qA', 'wAw', 'e','BAAAAAAAAAAAAA']

function filterArr(arr) {
    const result = arr.filter((el) => el[0].includes('A'))
    return result
}

const result = filterArr(arr)
console.log(result);