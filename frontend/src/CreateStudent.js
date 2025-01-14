import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [Name, setName] = useState('');
    const [City, setCity] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submit button clicked');
        console.log('Name:', Name);
        console.log('City:', City);
    
        axios.post('http://localhost:8081/Create', { name: Name, city: City })
            .then(res => {
                console.log('Response:', res.data);
                navigate('/');
            })
            .catch(err => console.error('Error:', err));
    }
    

    return (
        <div className="container vh-100 bg-secondary d-flex justify-content-center align-items-center">
            <div className="w-50 bg-light p-3 rounded">
                <form onSubmit={ handleSubmit }>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className='form-control'
                            value={Name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter Current City"
                            className='form-control'
                            value={City}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudent;
