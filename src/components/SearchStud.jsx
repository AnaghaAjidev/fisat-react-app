import React from 'react'
import NavBar from './NavBar'

const SearchStud = () => {
  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <div className="card shadow p-4 col-md-6 mx-auto">

          <h3 className="text-center mb-3">Search Student</h3>

          <label className="form-label">Admission Number</label>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Admission Number"
          />

          <button className="btn btn-primary w-100">
            Search Student
          </button>

        </div>
      </div>
    </>
  )
}

export default SearchStud