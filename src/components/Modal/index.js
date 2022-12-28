import { Overlay, Container, Footer } from "./style";
import PropTypes from 'prop-types';
import Button from '../Button';

import ReactPortal from "../ReactPortal";

export default function Modal ({ danger, title, children, cancelLabel,confirmLabel, onCancel, onConfirm, visible, isLoading }) {

   if( visible ){

        return (

            <ReactPortal containerId='modal-portal'>

            <Overlay>

                <Container danger={danger}>

                    <h1>{title}</h1>

                    <div className="modal-body">
                        {children}
                    </div>

                    <Footer>

                        <button onClick={onCancel} disabled={isLoading} className="cancel-button" type="button">{cancelLabel}</button>
                        <Button isLoading={isLoading} onClick={onConfirm} danger={danger} type="button">{confirmLabel}</Button>

                    </Footer>

                </Container>

            </Overlay>

            </ReactPortal>
        )
   }

   return null

}

Modal.PropTypes = {
    danger: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
}

Modal.defaultProps = {
    danger: false,
    cancelLabel: 'Cancelar',
    confirmLabel: 'Deletar',
    isLoading: false,
}
