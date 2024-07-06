// 19. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
// каждый элемент увеличен на один.

function plusElArr(arr) {
    const result = arr.map((el) => el + 1)
    return result
}

const result = plusElArr([1, 2, 3])

console.log(result);