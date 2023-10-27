import axios from "axios";
import { useEffect, useState } from "react";

function Students() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState(0);
    const [classroom, setClassroom] = useState("");
    const [students, setStudents] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {

        const result = await axios.get("https://localhost:44339/api/Student/GetStudents");
        setStudents(result.data);
    }

    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("https://localhost:44339/api/Student/AddStudent", {

                firstName: firstName,
                lastName: lastName,
                contactPerson: contactPerson,
                contactNo: contactNo,
                email: email,
                dob: dob,
                age: age,
                classroom: classroom

            });
            alert("Student Registation Successfully");
            setId("");
            setFirstName("");
            setLastName("");
            setContactPerson("");
            setContactNo("");
            setEmail("");
            setDob("");
            setAge(0);
            setClassroom("");


            Load();
        } catch (err) {
            alert(err);
        }
    }
    async function editStudent(students) {
        setFirstName(students.firstName);
        setLastName(students.lastName);
        setContactPerson(students.contactPerson);
        setContactNo(students.contactNo);
        setEmail(students.email);
        setDob(students.dob);
        setAge(students.age);
        setClassroom(students.classroom);
        setId(students.id);
    }

    async function DeleteStudent(id) {
        await axios.delete("https://localhost:44339/api/Student/DeleteStudent/" + id);
        alert("Employee deleted Successfully");
        setId("");
        Load();
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch("https://localhost:44339/api/Student/UpdateStudent/"+ students.find((u) => u.id === id).id || id,
                {
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    contactPerson: contactPerson,
                    contactNo: contactNo,
                    email: email,
                    dob: dob,
                    age: age,
                    classroom: classroom
                }
            );
            alert("Registation Updated");
            setId("");
            setFirstName(students.firstName);
            setLastName(students.lastName);
            setContactPerson(students.contactPerson);
            setContactNo(students.contactNo);
            setEmail(students.email);
            setDob(students.dob);
            setAge(students.age);
            setClassroom(students.classroom);

            Load();
        } catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <h1>Student Details</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">

                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            hidden
                            value={id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="stname"
                            value={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact Person</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={contactPerson}
                            onChange={(event) => {
                                setContactPerson(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={contactNo}
                            onChange={(event) => {
                                setContactNo(event.target.value);
                            }}
                        />
                    </div>


                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>


                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={dob}
                            onChange={(event) => {
                                setDob(event.target.value);
                            }}
                        />


                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            hidden
                            value={age}
                            onChange={(event) => {
                                setAge(event.target.value);
                            }}
                        />


                    </div>





                    <div className="form-group">
                        <label>Classroom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={classroom}
                            onChange={(event) => {
                                setClassroom(event.target.value);
                            }}
                        />
                    </div>




                    <div>
                        <button className="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button>
                        <button className="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br></br>
            <table className="table table-dark" align="center">
                <thead>
                <tr>
                    <th scope="col">Student Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Contact Person</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Age</th>
                    <th scope="col">Classroom</th>
                    <th scope="col">Option</th>
                </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody key={student.id}>
                        <tr>
                            <th scope="row">{student.id} </th>

                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>

                            <td>{student.contactPerson}</td>
                            <td>{student.contactNo}</td>

                            <td>{student.email}</td>
                            <td>{student.dob}</td>

                            <td>{student.age}</td>
                            <td>{student.classroom}</td>

                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editStudent(student)}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => DeleteStudent(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>

        </div>
    );
}

export default Students;