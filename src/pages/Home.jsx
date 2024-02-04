import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'


function Home() {
  return (
    <div>
        <Header/>
        <div style={{height:"90vh",marginTop:"70px"}}className="w-100 d-flex justify-content-center align-items-center back
rounded">
<div className="container">
  <div className="row  align-items-center ">
    <div className="col-lg-6  ">
      <h1 style={{fontSize:"50px",color:"white"}} className='fw-bolder mb-2    j1'>
      <i class="fa-solid fa-clapperboard  " style={{color: "red"}}></i> ShowTime </h1>
      <h3  style={{color:"red"}}  className=' p-4 fs-5 ' >Movie Ticket Booking App</h3>
      <p className='text-light p-2  fs-4  ' style={{textAlign:"justify"}}>Experience the ultimate Movie at your fingertips with our Booking Movie App</p>
 <Link className='btn btn-danger mt-2 ' to='/login'>Start to Book Your Show <i class="fa-solid fa-right-long fa-beat-fade ms-2"></i></Link>
  
  </div>
  </div>
</div>
</div>
<div className='mt-3 '>
<h1 style={{color:"red"}} className='text-center fw-bolder  mb-5'>Latest Releases</h1>
<marquee>
  <div className="d-flex  ">
    <div className="project me-5">
      <MovieCard/>
    </div>
  </div>
</marquee>
<div className="text-center">
<Link to={'/movies'}  style={{color:"red"}}className='btn btn-link '>View all Movies</Link>
</div>
</div>

    </div>
    
  )
}

export default Home