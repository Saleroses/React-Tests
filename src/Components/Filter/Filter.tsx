import React from 'react';

 export const Cars = [
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

