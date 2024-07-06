// 13. Напишите функцию, которая принимает строку и возвращает true, если строка является 
// палиндромом, и false в противном случае.

const str = 'woww'

function doPalindrom(str){
    return str === str.split("").reverse().join("") ? true : false;
}

const result = doPalindrom(str)
console.log(result);