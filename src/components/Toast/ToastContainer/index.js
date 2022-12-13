import * as S from './style';
import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

export default function ToastContainer () {

     const [ messages, setToast ] = useState([]);

    useEffect( () => {

       function handleAddToast( { detail: { type, text } } ){

        setToast( PrevValue => [...PrevValue,
            {
                id: Math.random(),
                type,
                text
            }]);

       }

       document.addEventListener('addtoast',handleAddToast);

        return () => document.removeEventListener('addtoast',handleAddToast);

    },[]);

    return (
        <S.Container>
           { messages.map( message => (
            <ToastMessage key={message.id} type={message.type} text={message.text} />
           ))}
        </S.Container>
    )

}
