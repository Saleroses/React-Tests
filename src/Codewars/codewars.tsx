import React from 'react';

let integers = [160, 3, 1719, 19, 11, 13, -21]

export function findOutlier(integers: number[]): number {
    const odd = integers.filter(i => i % 2 === 0)
    const even = integers.filter(i => i % 2 !== 0)

    return odd.length > 1 ? even[0] : odd[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

