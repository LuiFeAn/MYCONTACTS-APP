import * as S from './style';
import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

export default function ToastContainer () {

     const [ messages, setToast ] = useState([]);

    useEffect( () => {

       function handleAddToast({type,text}){

        setToast( PrevValue => [...PrevValue,
            {
                id: Math.random(),
                type,
                text

            }]);

       }

       toastEventManager.on('addtoast',handleAddToast);

        return () => toastEventManager.off('addtoast',handleAddToast);

    },[]);

    return (
        <S.Container>
           { messages.map( message => (
            <ToastMessage key={message.id} type={message.type} text={message.text} />
           ))}
        </S.Container>
    )

}
