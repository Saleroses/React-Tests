import React, {ChangeEvent, MouseEvent} from 'react';

export const CallBack = () => {
    return (
        <div>
            
        </div>
    );
};


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
       // alert('User have been deleted')
    }

    const nameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Name change")
    }


    return (
        <div><textarea onChange={nameChange}>UserName</textarea>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}
