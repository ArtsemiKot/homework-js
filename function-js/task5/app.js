// 5. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки отсортированы по длине.

const arr = ['Crazy','I am', 'Javascript', 'Developer']
function sortArr(arr) {
        const newArr = []

        for (let i = 0; i < arr.length; i++) {
            let str = Array(200)

            for (let y = 0; y < arr.length; y++) {
                if (str.length > arr[y].length && newArr.indexOf(arr[y]) == -1) {
                    str = arr[y]
                }
            }

            newArr.push(str)
        }
        return newArr
}


const result = sortArr(arr)
console.log(result);