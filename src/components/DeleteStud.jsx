import React from 'react'
import NavBar from './NavBar'

const DeleteStud = () => {
  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <div className="card shadow p-4 col-md-6 mx-auto">

          <h3 className="text-center mb-3">Delete Student</h3>

          <label className="form-label">Admission Number</label>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Admission Number"
          />

          <button className="btn btn-danger w-100">
            Delete Student
          </button>

        </div>
      </div>
    </>
  )
}

export default DeleteStud