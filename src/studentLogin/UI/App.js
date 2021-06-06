import 'bootstrap/dist/css/bootstrap.min.css'
import '../UI/style.css'
import ListStudents from '../UI/dashboard/ListStudents.js';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import InformationCard from '../UI/dashboard/InformationCard';
import ModalMsg from '../UI/dashboard/Modal.js';
import { creatingStudent, initialLst, students } from '../DAL/api.js';


function App() {
    const [selectedSudent, setSelectedSudent] = useState("")
    const [localStudents, setLocalStudents] = useState(initialLst)

    const revealedCard = (user) => {
        setSelectedSudent(user)
    }

    function sortNames() {
        const copyarr = [...localStudents]
        const temp = copyarr.sort((a, b) => {
            a = a["username"].toLowerCase();
            b = b["username"].toLowerCase();
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        setLocalStudents(temp)
        localStorage.setItem("students", JSON.stringify(temp))
    }

    const rebootList = () => {
        localStorage.setItem("students", JSON.stringify(students))
        setLocalStudents(students)
    }

    return <div className="container-fuid text-center main">
        <Navbar bg="dark" variant="dark" sticky="top" className="navStyle">
            <Navbar.Brand className="h1font" > du-Louvre University </Navbar.Brand>
            <section id="btnControl" >
                <ModalMsg onCreatingStudent={creatingStudent} localStudents={localStudents} setLocalStudents={setLocalStudents} />
                <Button onClick={sortNames} className="maginBtn">sort by name</Button>
                <Button onClick={rebootList} className="maginBtn">Reboot the list</Button>
            </section>
        </Navbar>
        <Container>
            <h1 className="h1Style h1font">Faculty Dashboard:</h1>
            <hr id="hrApp"></hr>
            <Row md="2">
                <Col>
                    <ListStudents onRevealedCard={revealedCard} local={localStudents} />
                </Col>
                <Col>
                    {selectedSudent && <InformationCard student={selectedSudent} onRevealedCard={revealedCard} />}
                    {!selectedSudent && <div id="msgDefault" className="h1font"> Click on one of the students to see HERE more information</div>}
                </Col>
            </Row>
        </Container>
    </div>
}

export default App