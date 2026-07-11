import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStud = () => {

  const [students, changeData] = useState([
    { admNo: "FISAT101", name: "Anagha Ajidev", department: "MCA", semester: "I", gender: "Female", phone: "9876543210", email: "anagha@gmail.com", address: "Ernakulam" },
    { admNo: "FISAT102", name: "Rahul Nair", department: "MCA", semester: "I", gender: "Male", phone: "9876543211", email: "rahul@gmail.com", address: "Kochi" },
    { admNo: "FISAT103", name: "Anjali Joseph", department: "MCA", semester: "I", gender: "Female", phone: "9876543212", email: "anjali@gmail.com", address: "Thrissur" },
    { admNo: "FISAT104", name: "Vishnu Raj", department: "MCA", semester: "I", gender: "Male", phone: "9876543213", email: "vishnu@gmail.com", address: "Kottayam" },
    { admNo: "FISAT105", name: "Meera Thomas", department: "MCA", semester: "I", gender: "Female", phone: "9876543214", email: "meera@gmail.com", address: "Kannur" },
    { admNo: "FISAT106", name: "Akash Kumar", department: "MCA", semester: "I", gender: "Male", phone: "9876543215", email: "akash@gmail.com", address: "Palakkad" },
    { admNo: "FISAT107", name: "Sneha S", department: "MCA", semester: "I", gender: "Female", phone: "9876543216", email: "sneha@gmail.com", address: "Alappuzha" },
    { admNo: "FISAT108", name: "Arjun Das", department: "MCA", semester: "I", gender: "Male", phone: "9876543217", email: "arjun@gmail.com", address: "Malappuram" },
    { admNo: "FISAT109", name: "Diya Paul", department: "MCA", semester: "I", gender: "Female", phone: "9876543218", email: "diya@gmail.com", address: "Kollam" },
    { admNo: "FISAT110", name: "Nikhil Menon", department: "MCA", semester: "I", gender: "Male", phone: "9876543219", email: "nikhil@gmail.com", address: "Trivandrum" }
  ])

  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <div className="row g-4">

          {students.map((student) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={student.admNo}>

              <div className="card h-100 shadow-lg border-0 rounded-4">

                <div className="card-body">

                  <h4 className="text-primary fw-bold">
                    {student.name}
                  </h4>

                  <hr />

                  <p><strong>Admission No:</strong> {student.admNo}</p>
                  <p><strong>Department:</strong> {student.department}</p>
                  <p><strong>Semester:</strong> {student.semester}</p>
                  <p><strong>Gender:</strong> {student.gender}</p>
                  <p><strong>Phone:</strong> {student.phone}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                  <p><strong>Address:</strong> {student.address}</p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default ViewStud