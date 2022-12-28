import { StyledButton } from "./style";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";

export default function Button({type,disabled,isLoading, children, danger, onClick}) {
    return (

        <StyledButton onClick={onClick} danger={danger} type={type} disabled={disabled || isLoading}>

            {!isLoading ? children : <Spinner size={16}/>}

        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    danger: PropTypes.bool,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type:'button',
    disabled:false,
    isLoading:false,
    onClick: undefined,
}
