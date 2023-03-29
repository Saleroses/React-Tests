import React, {ChangeEvent, MouseEvent} from 'react';

export const CallBack = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('User have been deleted')
    }

    const nameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        alert("Name change")
    }


    return (
        <div><textarea onChange={nameChange}>UserName</textarea>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}


