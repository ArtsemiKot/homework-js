// 14. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
// каждый элемент является квадратом исходного элемента.

const arr = [1,2,3,4,5]

function sqrArr(arr){
    const result = arr.map((el) => el**2)
    return result
}

const result = sqrArr(arr)
console.log(result);