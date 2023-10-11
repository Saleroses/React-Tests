import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
    const [counter, setCounter] = useState(0)
    console.log('Component rendered')

   useEffect( ()=> {
       console.log('Effect occurred')

       return ()=> {
           console.log('Effect stop')
       }
   }, [counter])


    return (
        <div>
        Hello, counter: {counter} <button onClick={()=> setCounter(counter+1)}> + </button>
        </div>
    );
};

