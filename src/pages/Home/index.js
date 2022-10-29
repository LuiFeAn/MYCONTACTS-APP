import { Container,Header, ListContainer, Card, InputSearchContainer }from"./style";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { useState,useEffect } from "react";

export default function Home () {

    const [contacts,setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/contacts')
        .then(async(resp) => {
            const json = await resp.json();
            setContacts(json);
        }).catch( err => console.log(err));
    },[]);

    return(
        <Container>

            <InputSearchContainer>
                <input type='search' placeholder='Pesquisar Contato'/>
            </InputSearchContainer>
            <Header>
                <strong>
                    {contacts.length}
                    {contacts.length === 1 ? ' Contato' : ' Contatos'}
                </strong>
                <Link to="/new">Novo Contato</Link>
            </Header>
            <ListContainer>
                    <header>
                        <button type="button">
                            <span>Nome</span>
                            <img src={arrow}/>
                        </button>
                    </header>
                </ListContainer>
            {contacts.map( concact => (
                <Card key={concact.id}>
                <div className="info">
                    <div className="contact-name">
                        <strong>{concact.name}</strong>
                        {concact.category_name && (
                             <small>{concact.category_name}</small>
                        )}
                    </div>
                    <span>{concact.email}</span>
                    <span>{concact.phone}</span>
                </div>
                <div className="actions">
                        <Link to={`/edit/${concact.id}`}>
                            <img src={edit} alt='edit'/>
                        </Link>
                        <button type="button">
                            <img src={trash} alt='delete'/>
                        </button>
                </div>
            </Card>
            ))}
        </Container>
    )
}
