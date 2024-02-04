import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import upload from '../assets/upload.png'

function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
<>
<button onClick={handleShow} style={{textDecoration:"none"}} className="btn btn-link text-danger d-flex align-items-center fw-bolder"><i style={{height:"34px"}} className="fa-solid fa-edit fa-2x "></i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:"black"}}>
          <Modal.Title style={{color:"red"}} className='fw-bolder'> Edit Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
<label className='w-100 d-flex align-items-center flex-column'>
  <input type="file"style={{display:"none"}} />
  <img height={'200px'} width={'200px'} className='' src={upload} alt="movie upload pic" />
</label>
<div className="text-danger">
  *Upload only the following file types (jpg,jpeg,png) only*
</div>

            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <input type="text" className="g1 rounded p-2 w-100"placeholder='Movie Title' />
              </div>
              <div className="mb-3">
                <input type="text" className="g1 rounded p-2 w-100"placeholder='Description' />
              </div>
              <div className="mb-3">
                <input type="text" className="g1 rounded p-2 w-100"placeholder='Main Actors' />
              </div>
              <div className="mb-3">
                <input type="text" className="g1 rounded p-2 w-100"placeholder='Release Date' />
              </div>
              <div className="mb-3">
                <input type="text" className="g1 rounded p-2 w-100"placeholder='Language' />
              </div>




            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Update</Button>
        </Modal.Footer>
      </Modal>


</>  


)
}

export default Edit