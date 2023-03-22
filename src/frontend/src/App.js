import './App.css';
import React, {useState, useEffect} from 'react'
import {getAllStudents} from "./client";

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

    return students.map((student, index) => {
        return <p key={index}>{student.id} {student.name} {student.email}</p>
    });
}

export default App;
