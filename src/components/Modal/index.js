import { Overlay, Container, Footer } from "./style";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import Button from '../Button';

export default function Modal ({ danger, title, children, cancelLabel,confirmLabel, onCancel, onConfirm, visible }) {

   if( visible ){
        return ReactDOM.createPortal(
            <Overlay>

                <Container danger={danger}>

                    <h1>{title}</h1>

                    <div className="modal-body">
                        {children}
                    </div>

                    <Footer>

                        <button onClick={onCancel} className="cancel-button" type="button">{cancelLabel}</button>
                        <Button onClick={onConfirm} danger={danger} type="button">{confirmLabel}</Button>

                    </Footer>

                </Container>

            </Overlay>,
            document.getElementById('modal-root')
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
}

Modal.defaultProps = {
    danger: false,
    cancelLabel: 'Cancelar',
    confirmLabel: 'Deletar',
}
