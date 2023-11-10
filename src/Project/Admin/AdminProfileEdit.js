import React, { Component, useEffect, useState } from 'react'
import './AdminProfileEdit.css'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

// class AdminProfileEdit extends Component {
//     render() {
//         const { adminID } = this.props;

//         return (
//             <div className='box'>
//                 <div className='admin-profile-edit-container'>
//                     <label>Admin ID: {adminID}</label>
//                     <label>Name: </label>
//                     <input type='text'></input>
//                     <label>Gender: </label>
//                     <select>
//                         <option>Male</option>
//                         <option>Female</option>
//                     </select>
//                     <label>Phone Number: </label>
//                     <input type='text'></input>
//                     <button type="submit">Save</button>
//                 </div>
//             </div>
//         )
//     }
// }

function AdminProfileEdit() {
    const { adminID } = useParams();
    const [values, setValues] = useState({
        adminID: adminID,
        name: '',
        phone: '',
        gender: 'Male'
    })
    useEffect(() => {
        axios.get('http://localhost:8081/admin/'+adminID)
        .then(res => {
            console.log(res.data);
            setValues({
                ...values,
                name: res.data.name, 
                gender: res.data.gender,
                phone: res.data.phone
            });
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submission in progress...');
        axios.put('http://localhost:8081/admin/'+adminID, values)
        .then(res => {
            // Log the response data
            console.log('PUT request successful. Response data:', res.data);

            // Navigate to the desired route
            navigate('/AdminProfile');
        }) 
        .catch(err => {
            console.error('Error during PUT request:', err);
        })
    }

    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <div className='admin-profile-edit-container'>
                    <label>Admin ID: {adminID}</label>
                    <label>Name: </label>
                    <input type='text' value={values.name} onChange={e => setValues({...values, name: e.target.value})}></input>
                    <label>Gender: </label>
                    <select value={values.gender} onChange={e => setValues({...values, gender: e.target.value})}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label>Phone Number: </label>
                    <input type='text' value={values.phone} onChange={e => setValues({...values, phone: e.target.value})}></input>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AdminProfileEdit
