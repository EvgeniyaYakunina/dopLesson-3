import React from 'react';

type PropsType={
    name: string
    callBack: () => void
}

export const Button =(props: PropsType)=> {

    const onClickHandler=()=>{
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
}

