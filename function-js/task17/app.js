// 17. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные значения.

const arr = [1, 2, 2, 2, 5]

function uniqArr(arr) {
    const result = arr.reduce((uniq, el) => {
        if (uniq.includes(el)) {
            return uniq
        }
        return [...uniq, el]
    }, [])
    return result
}

const result = uniqArr(arr)
console.log(result);