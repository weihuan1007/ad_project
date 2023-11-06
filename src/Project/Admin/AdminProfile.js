import React, { Component, useState, useEffect } from 'react'
import './AdminProfile.css'

class AdminProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8082/admin')
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
                <li key={index} className='listItem'>Admin ID : {item.adminID}<button>Edit</button></li>
                <li key={index} className='listItem'>Admin Name : {item.name}</li>
                <li key={index} className='listItem'>Gender : {item.gender}</li>
                <li key={index} className='listItem'>Phone Number : {item.phone}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AdminProfile
