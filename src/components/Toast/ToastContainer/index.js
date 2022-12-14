import * as S from './style';
import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

export default function ToastContainer () {

     const [ messages, setMessage ] = useState([]);

    useEffect( () => {

       function handleAddToast({type,text}){

        setMessage( PrevValue => [...PrevValue,
            {
                id: Math.random(),
                type,
                text

            }]);

       }

       toastEventManager.on('addtoast',handleAddToast);

        return () => toastEventManager.off('addtoast',handleAddToast);

    },[]);

    function handleRemoveMessage(id) {

        setMessage( PrevValue => PrevValue.filter( message => (
            message.id !== id
        )));

    }

    return (
        <S.Container>
           { messages.map( message => (
            <ToastMessage id={message.id} onRemoveMessage={handleRemoveMessage} key={message.id} type={message.type} text={message.text} />
           ))}
        </S.Container>
    )

}
