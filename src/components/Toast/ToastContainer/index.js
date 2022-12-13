import * as S from './style';

import ToastMessage from '../ToastMessage';

export default function ToastContainer () {

    return (
        <S.Container>
            <ToastMessage text='Default Toast'/>
            <ToastMessage text='Sucess Toast' type='danger'/>
            <ToastMessage text='Error Toast' type='sucess'/>
        </S.Container>
    )

}
