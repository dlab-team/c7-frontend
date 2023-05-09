import { Button, Modal } from 'react-bootstrap'
import { ArrowRepeat } from 'react-bootstrap-icons';
import './modalModify.scss'

const ModalModify = ({ show = false, tittle = '', modalBody, handleOk, handleClose = false, isLoading = false, btnCancel = 'Cancelar', btnOk = 'Cambiar', handleError }) => {
    if (!show) return;
    const handleAcceptDispatch = () => {
        try {
            handleOk()
        } catch (error) {
            handleError();
        }
    }

    return (<div id='modalModify'>
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <ArrowRepeat className='me-3' />
                    {tittle}
                    {isLoading &&
                        <div class="spinner-border ms-3 mx-auto text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {modalBody}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {btnCancel}
                </Button>
                <Button variant="primary" onClick={handleAcceptDispatch}>
                    {btnOk}
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}


export default ModalModify