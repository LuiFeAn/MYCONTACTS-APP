import * as S from './style';

import { useEffect } from 'react';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
    text,
    type = 'default',
    id,
    duration,
    onRemoveMessage
}) {

    function handleRemoveToast(){
        onRemoveMessage(id);
    }

    useEffect( () => {

        const timerId = setTimeout(() => {
            onRemoveMessage(id);
        },duration);

        return () => clearTimeout(timerId);


    },[type,onRemoveMessage]);

    return (
        <S.Container onClick={handleRemoveToast} role="button" tabIndex={0} type={type}>
            { type === 'danger' && <img src={xCircleIcon} alt='x'/>}
            { type === 'sucess' && <img src={checkCircleIcon} alt='check'/>}
            <strong>{text}</strong>
        </S.Container>
    )

}

