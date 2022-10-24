import { Container,Header, ListContainer, Card, InputSearchContainer } from "./style";
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home () {
    return(
        <Container>
            <InputSearchContainer>
                <input type='search' placeholder='Pesquisar Contato'/>
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo Contato</a>
            </Header>
            <ListContainer>
                    <header>
                        <button type="button">
                            <span>Nome</span>
                            <img src={arrow}/>
                        </button>
                    </header>
                </ListContainer>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Matheus Silva</strong>
                        <small>Instagram</small>
                    </div>
                    <span>matheus@devacademy.com.br</span>
                    <span>(41) 99999-99999</span>
                </div>
                <div className="actions">
                        <a href="/">
                            <img src={edit} alt='edit'/>
                        </a>
                        <button type="button">
                            <img src={trash} alt='delete'/>
                        </button>
                    </div>
            </Card>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Matheus Silva</strong>
                        <small>Instagram</small>
                    </div>
                    <span>matheus@devacademy.com.br</span>
                    <span>(41) 99999-99999</span>
                </div>
                <div className="actions">
                        <a href="/">
                            <img src={edit} alt='edit'/>
                        </a>
                        <button type="button">
                            <img src={trash} alt='delete'/>
                        </button>
                    </div>
            </Card>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Matheus Silva</strong>
                        <small>Instagram</small>
                    </div>
                    <span>matheus@devacademy.com.br</span>
                    <span>(41) 99999-99999</span>
                </div>
                <div className="actions">
                        <a href="/">
                            <img src={edit} alt='edit'/>
                        </a>
                        <button type="button">
                            <img src={trash} alt='delete'/>
                        </button>
                    </div>
            </Card>
        </Container>
    )
}
