import './App.css';
import React, {useState, useEffect} from 'react'
import {getAllStudents} from "./client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from "react-bootstrap/Table";

function App() {
    const [students, setStudents] = useState([])
    const fetchStudents = () => getAllStudents()
        .then(response => response.json())
        .then(data => setStudents(data));
    useEffect(() => {
        console.log('Component Mounted.');
        fetchStudents().then();
    }, [])

    if (students.length <= 0) {
        return <p>"No Data Available."</p>
    }

    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SpringBoot-React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About US</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div class="container my-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {students.map(function(student, index){
                    return (
                        <tr>
                            <td>{ student.id }</td>
                            <td>{ student.name }</td>
                            <td>{ student.email }</td>
                            <td>{ student.gender }</td>
                        </tr>
                    )
                })}

                </tbody>
            </Table>
        </div>
    </>
}

export default App;
