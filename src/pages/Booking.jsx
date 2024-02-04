import React from 'react'
import Header from '../Components/Header'
import {  Form, FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Booking() {
  return (
<>
<Header/>


<div  style={{marginTop:"100px",backgroundColor:"black"}}>
  <h1  style={{textAlign:"center",marginTop:"70px"}} className='p-2 fs-4 container fw-bolder text-white'>Book Tickets of Movie: <span className='fs-3' style={{color:"red"}}>Malaikottai Vaaliban</span></h1>

  </div>


<div className="w-100 d-flex justify-content-center align-items-center
rounded">
<div className="container">
  <div className="row  align-items-center ">
    <div className="col-lg-6  ">
    <img width={'80%'}height={'300px'} className='img-fluid' src="https://lolscream.com/wp-content/uploads/2024/01/Malaikottai-Vaaliban-Age-Rating-and-Parents-Guide.webp" alt="" />
    <div style={{width:'80%'}} className='mt-3 p-2 '>
<h5 className='pt-2'><span className='fw-bolder'>Description:</span> The life of a legendary man, with his struggles and triumphs, paves the way for next generations.</h5>
<h5 className='mt-1'><span className='fw-bolder'>Starrer:</span> Mohanlal....
Danish Sait,....  </h5>
<h5 className='mt-1'><span className='fw-bolder'> Release Date:</span> 25 January 2024
 </h5>
 </div>



  </div>
    <div className="col-lg-1"></div>
    <div style={{backgroundColor:"black"}} className="col-lg-4 g1 ">

<div style={{width:"80%"}} className='pt-3'>
<Form action="">
  <div style={{flexDirection:"column"}} className='p-5 m-auto  d-flex '>
<FormLabel className='fw-bolder ms-5 text-white'>Booking Date</FormLabel>
<input className='ms-5 g1'  type="date" placeholder='dd/mm/yy' />
  </div>
</Form>
<div    className='  d-flex pt-1 p-5   '>
  <Link to={'/seat'} style={{textDecoration:"none",color:"red"}} className='ms-5 p-4 fw-bolder fs-5 k1' >Select Seats</Link>{' '}
  </div>

<div>
</div>
</div>

    </div>
  </div>
</div>
</div>










</>  
)
}

export default Booking