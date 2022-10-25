import { Container } from "./style";
import PropTypes from 'prop-types';

export default function FormGroup ({children}){

    return (
        <Container>
            {children}
        </Container>
    )

}

FormGroup.prototype = {
    children: PropTypes.node.isRequired,
}
