import React, { Component } from 'react'
import './AdminManage.css'

export class AdminManage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8081/admin')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data });
            })
            .catch((error) => console.error('Error fetching profile: ' + error));
    }

    render() {
        const { data } = this.state;
        return (
            <div className='box'>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Admin ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.adminID}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button>Add Admin</button>
                </div>
            </div>
        )
    }
}

export default AdminManage
