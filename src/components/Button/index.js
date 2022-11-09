import { StyledButton } from "./style";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";

export default function Button({type,disabled,isLoading, children}) {
    return (
        <StyledButton type={type} disabled={disabled || isLoading}>
            {!isLoading ? children : <Spinner size={16}/>}
        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    type:'button',
    disabled:false,
    isLoading:false,
}
