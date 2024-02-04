import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import admin from '../assets/admin.png'



function Admin() {
  return (
    <>
    <div style={{width:"100%",height:"100vh",marginBottom:"20px"}} className='d-flex justify-content-center align-items-center '>
    <div className="container w-75">
      <Link to='/'  style={{textDecoration:"none",color:"red"}}><i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
      <div className="card shadow p-5 x1 mt-3" style={{backgroundColor:"black"}}>
        <div className="row align-items-center">

 <div className="col-lg-6">
            <img className='w-75' src={admin} alt="authentication" />
          </div>
{/* }          */}
 <div className="col-lg-6">
            <h1  className='fw-bolder text-white mt-3 j1 fs-3'>
            <i class="fa-solid fa-user-tie text-danger" ></i> Admin Panel
            </h1>
   <h3 style={{color:"red"}} className='fw-bolder fs-3 mt-4 '> Welcome... </h3>


 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='mt-2' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPswd">
        <Form.Control className='mt-1' type="password" placeholder="Enter password" />
      </Form.Group>

    </Form>

               

              <div>
              <button className='btn btn-danger mb-2'>Login </button>
              </div>
      


          </div>
        </div>
      </div>
    </div>
    
    </div>

    </>
  )
}

export default Admin