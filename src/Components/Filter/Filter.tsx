import React from 'react';

const Cars = [
    {id:1, brand: "BMW", model: "m3"},
    {id:2, brand: "BMW", model: "m4"},
    {id:3, brand: "BMW", model: "m5"},
    {id:4, brand: "BMW", model: "m6"},
    {id:5, brand: "HONDA", model: "civic"},
    {id:6, brand: "HONDA", model: "accord"},
    {id:7, brand: "HONDA", model: "stage"},
    {id:8, brand: "MB", model: "600"},
]

const NormCars = Cars.filter(Cars => Cars.brand !== "HONDA");
console.log(NormCars)


const numbers = [211, 721, 931, 706, 13, 544, 786, 668, 920, 318, 389, 145, 450, 802, 793, 649, 496, 257, 688, 289, 773, 60, 453, 28, 452, 137, 874, 11, 483, 296, 840, 222, 1000, 896, 54, 233, 641, 511, 982, 23, 361, 636, 855, 832, 34, 855, 995, 500, 956, 850, 202, 694, 21, 164, 284, 602, 152, 413, 932, 759, 397, 568, 45, 569, 614, 782, 665, 671, 48, 264, 373, 594, 997, 692, 961, 443, 218, 426, 740, 336, 293, 408, 295, 800, 210, 831, 837, 784, 130, 80, 685, 30, 712, 357, 451, 920, 867, 726, 777, 782]

const CorrectNumbers = numbers.filter(num => num >= 350)
console.log(CorrectNumbers)
