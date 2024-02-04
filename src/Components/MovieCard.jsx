import React from 'react'
import { Modal,Card, Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function MovieCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

<Card className="shadow mb-5 btn"style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-106314836,width-1280,height-720,resizemode-4/106314836.jpg" />
      <Card.Body>
        <Card.Title className='card'>Malaikottai Vaaliban</Card.Title>
        <Link to={'/booking'} className='fw-bolder ' style={{textDecoration:"none",color:"red"}}>Book</Link>

      </Card.Body>
    </Card>
    
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://static.toiimg.com/thumb/msid-106314836,width-1280,height-720,resizemode-4/106314836.jpg" alt="movie image" />
            </Col >
            <Col  sm={12} md={6}>
<h2 className='fw-bolder 'style={{color:"red"}}>Title</h2>
<p>About: <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetuborum porro recusandae sit beatae, ad nam nemo adipisci vero? Perferendis, maxime.
</span></p>
 <p>Language : <span className='fw-bolder text-danger'>Malayalam</span></p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default MovieCard