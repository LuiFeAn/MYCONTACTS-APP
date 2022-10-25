import { Container } from "./style";
import PropTypes from 'prop-types';

export default function FormGroup ({children,error}){

    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    )

}

FormGroup.PropTypes = {
    children: PropTypes.node.isRequired,
    error: PropTypes.string,
}

FormGroup.defaultProps = {
    error:null,
}
