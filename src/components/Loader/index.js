import { Overlay } from "./style";
import  ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default function Loader ({isLoading}){

    if(!isLoading) return null;

    return ReactDOM.createPortal (
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        document.getElementById('loader-root')
    )

}

Loader.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
}
