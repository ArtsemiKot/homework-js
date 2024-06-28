// 2. Напишите функцию, которая принимает строку и возвращает количество гласных в этой
// строке.

const countingVowels = (str) => {
    const vowelList = 'eayyauoieeEEO'
    let count = 0

    for (let i = 0; i < str.length; i++) vowelList.indexOf(str[i]) !== -1 ? count += 1 : null

    return count
}

console.log(countingVowels('I am developer'))