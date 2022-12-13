import * as S from './style';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({text,type}) {

    return (
        <S.Container>
            { type === 'danger' && <img src={xCircleIcon} alt='x'/>}
            { type === 'sucess' && <img src={checkCircleIcon} alt='check'/>}
            <strong>{text}</strong>
        </S.Container>
    )

}

