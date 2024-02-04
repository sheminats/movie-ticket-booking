import React from 'react'
import Add from '../Components/Add'
import Edit from '../Components/Edit'


function MyMovies() {
  return (
    <div style={{backgroundColor:"black"}} className='f1 rounded p-2 mt-4 '>
      <div className="d-flex justify-content-between">
        <h2 style={{color:"red"}}className=' fw-bolder fs-3'>My Movies</h2>
        <Add/>
      </div>
      <div className="mt-4">
        <div className="f1 rounded d-flex justify-content-between align-items-center mb-3 p-2">
          <h5 className='text-white'> Title</h5>
          <div className="icons d-flex align-items-center">
            <Edit/>
            <button className="btn btn-link ms-2 "><i style={{height:"34px",color:"red"}} className="fa-solid fa-trash fa-2x"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyMovies