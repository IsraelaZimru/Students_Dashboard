import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkedAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { InputGroup, Form, Button, ButtonGroup, Container, Col } from 'react-bootstrap'
import "../style.css"


const StudentForm = ({ onCreatingStudent, localStudents, setLocalStudents }) => {

    const [validated, setValidated] = useState(false);
    const [details, setDetails] = useState({
        username: { isRequired: true, pattern: /^([א-ת]|\w){2,}$/, msg: [], value: "", isInVaild: false },
        email: { isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, msg: [], value: "", isInVaild: false },
        address: { isRequired: true, pattern: /([א-ת ]|\w){10,}/, msg: [], value: "", isInVaild: false },
        course: { isRequired: true, msg: [], pattern: /\w{2,}/, value: "", isInVaild: false },
        gender: { isRequired: true, msg: [], pattern: /\w{2,}$/, value: "", isInVaild: false }
    })

    const handleSubmit = (event) => {
        const checkErrors = [];

        for (const key in details) {
            if (Object.hasOwnProperty.call(details, key)) {
                checkErrors.push(validation({ name: key, value: details[key].value }))

            }
        }

        for (const error of checkErrors) { //if there is error msg ->submit don't happens!
            if (error) {
                setValidated(false)
                event.preventDefault();
                event.stopPropagation();
                return;
            }
        }

        alert("Student successfully added")
        setValidated(true);
        onCreatingStudent(details, setLocalStudents, localStudents)
    };

    function validation({ name, value }) {
        const errorMsg = [];
        let isMsgShowing = false;
        if (value === "") {
            isMsgShowing = true
            errorMsg.push(`${name} is required.`)
        } else if (details[name].isRequired && (details[name].pattern).test(value)) {
            isMsgShowing = false
        } else {
            errorMsg.push(`${name} is not valid.`)
            isMsgShowing = true
        }
        setDetails(prevDetails => ({ ...prevDetails, [name]: { ...prevDetails[name], value, isInVaild: isMsgShowing, msg: errorMsg } }))
        return errorMsg[0] //importent for sumbit form!!!
    }


    return <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Username:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text ><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            onBlur={e => validation(e.target)}
                            onChange={(e) => validation(e.target)}
                            value={details.username.value}
                            type="text"
                            isInvalid={details.username.isInVaild}// A function that decides when a comment appears!true/false
                            placeholder="Enter Username..."
                            required
                            name="username" />
                        <Form.Control.Feedback type="invalid">
                            {details.username.msg}
                            <br></br>
                            must be longer than 2 letters.
                            </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Email address:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text >@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            required
                            isInvalid={details.email.isInVaild}// A function that decides when a comment appears!true/false
                            onBlur={e => validation(e.target)}
                            onChange={(e) => validation(e.target)}
                            value={details.email.value}
                            type="email"
                            placeholder="Enter Email..."
                            name="email" />
                        <Form.Control.Feedback type="invalid">
                            {details.email.msg}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>

            <Form.Group >
                <Form.Label>Address:</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Prepend>
                        <InputGroup.Text > <FontAwesomeIcon icon={faMapMarkedAlt} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        isInvalid={details.address.isInVaild}//A function that decides when a comment appears!true/false
                        placeholder="Street, Number, City, Zip..."
                        name="address"
                        onBlur={e => validation(e.target)}
                        onChange={(e) => validation(e.target)}
                        value={details.address.value}
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {details.address.msg}
                        <br></br>
                A full address must be entered - 10 chars onwards
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>


            <Form.Row>
                <Form.Group as={Col} md="6">
                    <Form.Label className="block">Course:</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text > <FontAwesomeIcon icon={faGraduationCap} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            as="select"
                            name="course"
                            isInvalid={details.course.isInVaild}// A function that decides when a comment appears!true/false
                            value={details.course.value}
                            onChange={(e) => validation(e.target)}
                            onBlur={e => validation(e.target)}>
                            <option value="">Select Course...</option>
                            <option value="Art Theory - Basis">Art Theory - Basis</option>
                            <option value="History of French art">History of French art</option>
                            <option value="Art Theory - Advanced">Art Theory - Advanced</option>
                            <option value="Introduction to Art Therapy">Introduction to Art Therapy</option>
                            <option value="Art therapy - advanced">Art therapy - advanced</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {details.course.msg}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6">
                    <Form.Label className="block">Gender:</Form.Label>
                    <InputGroup hasValidation>
                        <ButtonGroup
                            isInvalid={details.gender.isInVaild}// A function that decides when a comment appears!true/false
                        >
                            <Button
                                name="gender"
                                value="female"
                                variant="outline-info"
                                className={details.gender.msg.length ? "alert-danger" : ""}
                                onClick={e => validation(e.target)}
                            >
                                Female
                    </Button>
                            <Button
                                name="gender"
                                value="male"
                                variant="outline-info"
                                className={details.gender.msg.length ? "alert-danger" : ""}
                                onClick={e => validation(e.target)}>
                                Male
                    </Button>
                            <Button
                                name="gender"
                                value="other"
                                variant="outline-info"
                                className={details.gender.msg.length ? "alert-danger" : ""}
                                onClick={e => validation(e.target)}>
                                Other
                    </Button>
                        </ButtonGroup>
                        {details.gender.msg && <small id="genderMsg">{details.gender.msg} </small>}
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Button type="submit" variant="outline-dark">Submit form</Button>
        </Form>
    </Container >
}

export default StudentForm