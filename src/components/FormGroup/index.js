import { Container } from "./style";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Loader from '../Loader';

export default function FormGroup ({children,isLoading,error}){

    return (
        <Container>
            <div className="form-item">
                {children}
                {isLoading && (
                    <div className="laoder">
                        <Spinner size={16}/>
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
