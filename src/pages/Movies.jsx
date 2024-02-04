import React from 'react'
import Header from '../Components/Header'
import { Row ,Col} from 'react-bootstrap'
import MovieCard from '../Components/MovieCard'



function Movies() {
  return (
    <>
    <Header/>
<div style={{marginTop:"150px"}} className=' mt-5 '>
<h1 style={{width:"30%",textAlign:"center",color:"red",marginTop:"70px"}} className='container  p-2   fw-bolder '>All Movies</h1>
</div>

<Row className='mt-5 ms-4'>
        <Col sm={6} md={4} lg={4}>
          <MovieCard/>

        </Col>
      </Row>

    </>
  )
}

export default Movies