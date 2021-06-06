import { Table } from 'react-bootstrap';

function ListStudents({ onRevealedCard, local }) {

    return <Table bordered className="text-light">
        <thead>
            <tr>
                <th>Student Username:</th>
                <th>Course:</th>
            </tr>
        </thead>
        <tbody>
            {local.map((student, i) => <tr key={i} onClick={() => onRevealedCard(student)} className="rowStyle">
                <td>{student.username}</td>
                <td>{student.course}</td>
            </tr>)}
        </tbody>
    </Table>
}

export default ListStudents