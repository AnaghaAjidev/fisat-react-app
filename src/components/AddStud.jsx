import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
  return (
    <>
    <NavBar />

    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Student</h2>

        <div className="row g-3">

          <div className="col-12 col-sm-6">
            <label className="form-label">Admission Number</label>
            <input type="text" className="form-control" placeholder="Enter Admission Number" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Full Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Gender</label>
            <select className="form-select">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Class / Grade</label>
            <input type="text" className="form-control" placeholder="Enter Class / Grade" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Section</label>
            <input type="text" className="form-control" placeholder="Enter Section" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Parent / Guardian Name</label>
            <input type="text" className="form-control" placeholder="Enter Parent Name" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Contact Number</label>
            <input type="tel" className="form-control" placeholder="Enter Contact Number" />
          </div>

          <div className="col-12 col-sm-6">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Email Address" />
          </div>

          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea className="form-control" rows="3" placeholder="Enter Address"></textarea>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-success px-4">
              Add Student
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AddStudent