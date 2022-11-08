import { checkPropTypes } from 'prop-types';
import { StyledPinner } from './styles';
import PropTypes from 'prop-types';

export default function Spinner({size}){
    return (
        <StyledPinner size={size}/>
    )
}

Spinner.protoTypes = {
    size: PropTypes.number,
}


Spinner.defaultProps = {
    size:32
}
