// 16. Напишите функцию, которая принимает число и возвращает сумму его цифр.

function sumNumber(num) {
    num = String(num)
    const newNum = num.split('')
    const result = newNum.reduce((sum, el) => sum += +el, 0)
    return result
}

const result = sumNumber(1234)

console.log(result);