import React, { Component } from 'react'
import './AdminNavBar.css'
import AdminProfile from './AdminProfile'

class AdminDashBoard extends Component {
    render() {
        return (
            <div className='vertical-navbar'>
                <ul className='navbar-list'>
                    <li><a href='/AdminDashBoard'>Dashboard</a></li>
                    <li><a href='/AdminMaps'>Maps</a></li>
                    <li><a href='/AdminProfile'>Profile</a></li>
                    <li><a href='/AdminSettings' >Settings</a></li>
                </ul>
            </div>
        )
    }
}

export default AdminDashBoard

