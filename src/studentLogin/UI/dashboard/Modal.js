import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import StudentForm from './Form';


const ModalMsg = ({ onCreatingStudent, localStudents, setLocalStudents }) => {
    const [show, setShow] = useState(false); //setting of Modal msg

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Button variant="primary" onClick={handleShow}> Add new student </Button>
        <Modal className="formStyle fontStlye" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title > Hello Student! <br></br> <p>Please fill in your detaild</p> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StudentForm onCreatingStudent={onCreatingStudent} localStudents={localStudents} setLocalStudents={setLocalStudents} />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
}

export default ModalMsg