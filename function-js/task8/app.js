// 8. Напишите функцию, которая принимает число и возвращает его факториал.

function factorial(a) {
    if (a <= 1) return 1
    return a * factorial(a - 1)
}

console.log(factorial(5));