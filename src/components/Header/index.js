import { Container,InputSearchContainer } from './style';

import logo from '../../assets/images/MyContacts.svg';

export default function Header () {

    return(
        <Container>
            <img src={logo} alt='MyContacts' width='201'/>
            <InputSearchContainer>
                <input type='search' placeholder='Pesquisar Contato'/>
            </InputSearchContainer>
        </Container>
    )

}
