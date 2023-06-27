// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {number} from "prop-types";

export function sum(...nums: Array<number>): number {
    // console.log(nums)
   return  nums.reduce((acc, el) => acc+el)
    // or
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number) {
    if ( b+c < a || a+b < c) {
        return '00'
    } if (a === b && a === c) {
        return '10'
    } if (a === b || b === c || c === a) {
        return '01'
    } if ( (a+b+c) % 3 === 0) {
        return '11'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{

    //...здесь пишем код.
    return number.toString()
        .split('')
        .map(Number)
        .reduce( (a,b) => a+b)

}


// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let even = 0
    let odd = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            even = even + arr[i]
        } else {
            odd = odd + arr[i]
        }
    }

    return odd > even ? true : false

}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let result: Array<number> = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) {
            result.push(array[i]*array[i])
        }
    }
    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let result = 0
    for (let i = 0; i <= N; i++) {
        result = result + i
    }
    return result
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let result: Array<number>= []
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let i = 0
    while (amountOfMoney > 0) {
        if (amountOfMoney >= banknotes[i]) {
            amountOfMoney = amountOfMoney - banknotes[i]
            result.push(banknotes[i])
        } else {
            i++
        }
    }
    return result


}


let principal = 1000;
let interest = 0.05;
let tax = 0.18;
let desired = 1100





