import { Button, Row, Container, Col } from 'react-bootstrap'

const InformationCard = ({ student, onRevealedCard }) => {

    return <Container className="p-0 m-0">
        <Row className=" m-2 cardInfo">
            <Col xs={1}>
                <Button className="" id="extBtn" onClick={() => onRevealedCard(null)}>X</Button>
            </Col>
            <Col xs={4} className="d-flex align-items-center">
                <img src={student.pic} alt="crdImg" id="crdImg" />
            </Col>
            <Col xs={6} className="text-left">
                <h2 className="text-center pt-2">Additional information:</h2>
                <hr className="hrCard"></hr>
                {Object.entries(student).map(([key, value]) => {
                    return <p key={key} style={{ display: "block" }} >
                        {(key === "pic") ?
                            "" :
                            `- ${key} : ${value}`}
                    </p>
                })}
            </Col>
        </Row>
    </Container >
}

export default InformationCard
