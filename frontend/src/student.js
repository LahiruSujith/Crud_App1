import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Student() {

  const [student, setStudent] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8081/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
  },[])

  return (
    <div class="container vh-100 bg-secondary d-flex justify-content-center align-items-center">
    <div class="w-75 bg-light p-4 rounded">
      <button class="btn btn-primary">Add +</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        {student.map((data, id) => (
          <tr key={id}>
            <td>{data.Name}</td>
            <td>{data.City}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  </div>
  

  )
}

export default Student
