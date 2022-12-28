import { Overlay } from "./style";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";

import ReactPortal from "../ReactPortal";

export default function Loader ({isLoading}){

    if(!isLoading) return null;

    return (
        <ReactPortal containerId='loader-portal'>
            <Overlay>
                <Spinner size={90} />
            </Overlay>,
        </ReactPortal>
    )

}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
