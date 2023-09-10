import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {

  const [student, setStudent] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8081/")
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
  },[])

  return (
    <div class="container vh-100 bg-secondary d-flex justify-content-center align-items-center">
    <div class="w-75 bg-light p-4 rounded">
      <Link to='./create' class="btn btn-primary">Add +</Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {
          student.map((data, id) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.city}</td>
              <td>
                <button class='btn btn-success'>Update</button>
                <button class='btn btn-danger m-2'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
      </table>
    </div>
  </div>
  

  )
}

export default Student
