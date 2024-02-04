import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {Badge} from 'react-bootstrap'


function Header() {
  return (
    <div className='q1'>
                 <Navbar style={{zIndex:1}} expand="lg" className="q1 w-100 position-fixed top-0">
      <Container>
            <Navbar.Brand className='r1'> <Link to={'/'} className='text-white fw-bolder ' style={{textDecoration:'none'}} href="#home"><i class="fa-solid fa-clapperboard fa-bounce " style={{color: "red"}}></i> ShowTime</Link></Navbar.Brand>
    
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
<Nav.Link><input  style={{width:"300px",marginRight:"200px",}}placeholder='Search Movies..' type='text'className='rounded ms-4 container'></input></Nav.Link>
           
<Nav.Link ><Link to={'/movies'} style={{textDecoration:"none",color:"white"}}> <i className='fa-solid fa-video text-danger'></i> Movies <Badge className='bg-black text-white '></Badge></Link></Nav.Link>
            <Nav.Link> <Link to={'/admin'} style={{textDecoration:"none",color:"white",}}><i className='fa-solid fa-user-tie text-danger'></i> Admin <Badge className='bg-black text-white '></Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/login'} style={{textDecoration:"none",color:"white"}}> <i class="fa-regular fa-face-laugh-wink text-danger"></i> Auth <Badge className='bg-black text-white '></Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header