import React from 'react';

let MyFriends = {
    name: "Ira",
    age: 31,
    friends: [
        {name: "Kate", age: 31},
        {name: "Olga", age: 33},
    ]
}

type ImmutabilityType = {
    name: string
    age: number
    friends: Array<friendsType>
}

type friendsType = {
    name: string
    age: number
}

function Immutability (u: ImmutabilityType, newFriend: friendsType) {
    let copy = {...u, friends: [...u.friends]}
    copy.friends.push(newFriend)
    return (
        copy
    );
};

console.log(Immutability(MyFriends, {name: "Hasbik", age: 42}))

export default Immutability;