import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Header from '../Components/Header';
import sign from '../assets/sign.png'
import register from '../assets/register.png'



function Auth({insideRegister}) {
  return (
    <>
    <Header/>
    <div style={{width:"100%",height:"100vh",marginBottom:"20px"}} className='d-flex justify-content-center align-items-center '>
    <div className="container w-75">
      <Link to='/'  style={{textDecoration:"none",color:"red"}}><i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
      <div className="card shadow p-5 x1 mt-3" style={{backgroundColor:"black"}}>
        <div className="row align-items-center">
{ insideRegister?  
 <div className="col-lg-6">
 <img className='w-75' src={register} alt="authentication" />
</div>:

 <div className="col-lg-6">
            <img className='w-75' src={sign} alt="authentication" />
          </div>
}         
 <div className="col-lg-6">
            <h1  className='fw-bolder text-white mt-3 j1 fs-3'>
              <i class="fa-solid fa-clapperboard fa-fade" style={{color: "red"}}></i> ShowTime
            </h1>
            <h5 className='fw-bolder fs-5 mt-4 text-light'>Sign {insideRegister?"Up":"In"} To Your Account</h5>
            <Form>
                  {
                insideRegister&&
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control className='mt-2' type="email" placeholder="Enter Name"/>
              </Form.Group>
        
              }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='mt-2' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPswd">
        <Form.Control className='mt-1' type="password" placeholder="Enter password" />
      </Form.Group>

    </Form>

               

{
      insideRegister?
      <div>
        <button  className='btn btn-danger mb-2'>Register</button>
        <p className='text-light'>Already have Account? Click here to <Link style={{color:"red"}}  to="/login">Login</Link></p>
        </div>:
              <div>
              <button className='btn btn-danger mb-2'>Login </button>
              <p className='text-light'>New User? Click here to <Link style={{color:"red"}} to="/register">Register</Link></p>
              </div>
      

    }

          </div>
        </div>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Auth