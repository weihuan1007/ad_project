import React, { Component, useState, useEffect } from 'react'
import './AdminProfile.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AdminProfileEdit from './AdminProfileEdit';

class AdminProfile extends Component {
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
        <div className='container'>
          <h1 className="heading">Admin Profile</h1>
          <ul className='list'>
            {data.map((item, index) => (
              <div>
                <li key={index} className='listItem'>Admin ID : {item.adminID}</li>
                <li key={index} className='listItem'>Admin Name : {item.name}</li>
                <li key={index} className='listItem'>Gender : {item.gender}</li>
                <li key={index} className='listItem'>Phone Number : {item.phone}</li>
                <Link to={`/AdminProfileEdit/${item.adminID}`}>
                  <button>Edit</button> 
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AdminProfile
