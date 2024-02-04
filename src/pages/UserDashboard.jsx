import React from 'react'
import Header from '../Components/Header'


function UserDashboard() {
  return (
   <>
   <Header/>
   <div style={{marginTop:"100px"}} className='container '>
<h1>Welcome <span style={{color:"red"}}>User</span></h1>



<table className='g1' style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th>Movie Name</th>
            <th >Booking Date</th>
            <th>No.of seats booked</th>
            <th >Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >Malaikottai Vaaliban</td>
            <td >27/01/2024</td>
            <td >2</td>
            <td >$800</td>
          </tr>
          
        </tbody>
      </table>
</div>
   </>
  )
}

export default UserDashboard