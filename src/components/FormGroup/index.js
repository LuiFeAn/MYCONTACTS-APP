import { Container } from "./style";
import PropTypes from 'prop-types';

export default function FormGroup ({children,isLoading,error}){

    return (
        <Container>
            <div className="form-item">
                {children}
                {isLoading && (
                    <div className="loader">

                    </div>
                ) }
            </div>
            {error && <small>{error}</small>}
        </Container>
    )

}

FormGroup.PropTypes = {
    children: PropTypes.node.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool,
}

FormGroup.defaultProps = {
    error:null,
}
