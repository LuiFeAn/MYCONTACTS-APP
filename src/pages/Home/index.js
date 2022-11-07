import { Container,Header,ListHeader, Card, InputSearchContainer, ErrorContainer, EmptyListContainer, SearchNotFoundContainer }from"./style";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { useState,useMemo,useEffect, useCallback } from "react";
import Loader from '../../components/Loader';
import ContactService from "../../services/contact-service";

import sad from '../../assets/images/icons/sad.svg';
import Button from '../../components/Button';
import emptyBox from '../../assets/images/icons/empty-box.svg';
import magnifier from '../../assets/images/icons/magnifier-question.svg';

export default function Home () {

    const [contacts,setContacts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [orderBy,setOrderBy] = useState('asc');
    const [search,setSearch] = useState('');
    const [hasError,setHasError] = useState(false);


    const filterContacts = useMemo(()=>
        (contacts.filter( concact => concact.name.toLowerCase().includes(search.toLocaleLowerCase())))
    ,[contacts,search]);

    const getContacts = useCallback( async () => {
        try{
            const contactsList = await ContactService.getContacts(orderBy);
            setIsLoading(false);
            setContacts(contactsList);
            setHasError(false);
          }catch(err){
            setHasError(true);
          }finally{
            setIsLoading(false);
          }
    },[orderBy]);

    useEffect(() => {
        setIsLoading(true);
        getContacts();

    },[getContacts]);

    const handleToggleOrderBy = () => setOrderBy(PrevState => PrevState === 'asc' ? 'desc' : 'asc');

    const handleChangeSearch = event => setSearch(event.target.value);

    function handleTryAgain(){
        getContacts();
    }

    return(
        <Container>
            <Loader isLoading={isLoading}/>

            {contacts.length  > 0 && (
                 <InputSearchContainer>
                    <input value={search} onChange={handleChangeSearch} type='search' placeholder='Pesquisar Contato'/>
                 </InputSearchContainer>
            )}


                <Header justifyContent=
                {(hasError
                    ? 'flex-end'
                    : contacts.length > 0
                    ? 'space-between'
                    : 'center')}>

                    {(!hasError && contacts.length > 0) &&
                    <strong>

                        {filterContacts.length}
                        {filterContacts.length === 1
                        ? ' contato'
                        : ' contatos'}

                    </strong>}
                    <Link to="/new">Novo Contato</Link>
                     <Link to="/newCategory">Nova Categoria</Link>
                </Header>


                {!hasError &&
                <>

                    {contacts.length < 1 && !isLoading && (
                        <EmptyListContainer>
                            <img src={emptyBox}/>
                            <p>Você ainda não tem nenhum contato cadastrado ! Clique no botão <strong>"Novo Contato"</strong> à cima para cadastrar o seu primeiro!</p>
                        </EmptyListContainer>
                    )}

                    {contacts.length > 0 && filterContacts.length < 1 && (
                         <SearchNotFoundContainer>
                            <img src={magnifier}/>
                            <span>Nenhum resultado foi encontrado para <strong>{search}</strong></span>
                        </SearchNotFoundContainer>
                    )}

                    {filterContacts.length > 0 && (
                    <ListHeader orderBy={orderBy}>
                    <button onClick={handleToggleOrderBy} type="button">
                        <span>Nome</span>
                        <img src={arrow}/>
                    </button>
                    </ListHeader>
                )}
                {filterContacts.map( concact => (
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
                </>}

                {hasError && (
                    <ErrorContainer>
                        <img src={sad} alt='sad-icon'/>
                        <div className="details">
                            <span><strong>Ocorreu um erro ao obter seus contatos </strong></span>
                            <Button onClick={handleTryAgain} type="button">Tentar novamente</Button>
                        </div>
                    </ErrorContainer>
                )}
        </Container>
    )
}
