import React from 'react';

let Users = {
    name: "Mark",
    age: 34,
    lesson: 2,

}

const {name, age} = Users

const Destructuring = () => {
    console.log(name, age)
    return (
        <div>

        </div>
    );
};

export default Destructuring;