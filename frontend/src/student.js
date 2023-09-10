import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/student/${id}`);
      // Update the student state to remove the deleted item
      setStudent((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className="container vh-100 bg-secondary d-flex justify-content-center align-items-center">
      <div className="w-75 bg-light p-4 rounded">
        <Link to="/create" className="btn btn-primary">Add +</Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, id) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.city}</td>
                <td>
                  <Link to={`update/${data.id}`} className='btn btn-success'>Update</Link>
                  <button className='btn btn-danger m-2' onClick={e => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;