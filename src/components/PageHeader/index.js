import { Container } from './style';
import PropTYpes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader ({ title }){
    return(
        <Container>
                <Link to='/'>
                    <img src={arrow} alt='back'/>
                    <span>Voltar</span>
                </Link>
               <h1>{title}</h1>
        </Container>
    )
};

PageHeader.prototype = {
    title: PropTYpes.string.isRequired
}
