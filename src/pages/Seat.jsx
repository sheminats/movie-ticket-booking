import { Checkbox, IconButton,  Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Seat() {
  return (
   <>
   
   <div class="m1">
      <div class="screen"></div>
</div>



    
   <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  style={{color:"red"}} disableRipple   >
 A <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A1')): (setC(c-1),   details[0].splice(  details[0].indexOf('A1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A2')): (setC(c-1),   details[0].splice(  details[0].indexOf('A2'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A5')): (setC(c-1),   details[0].splice(  details[0].indexOf('A5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A6')): (setC(c-1),   details[0].splice(  details[0].indexOf('A6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A9')): (setC(c-1),   details[0].splice(  details[0].indexOf('A9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A10')): (setC(c-1),   details[0].splice(  details[0].indexOf('A10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A13')): (setC(c-1),   details[0].splice(  details[0].indexOf('A13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A14')): (setC(c-1),   details[0].splice(  details[0].indexOf('A14'), 1) )  } />
</IconButton>
    </Stack>

    </div>
    


<div  style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  style={{color:"red"}} disableRipple   >
B <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C1')): (setC(c-1),   details[0].splice(  details[0].indexOf('C1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C2')): (setC(c-1),   details[0].splice(  details[0].indexOf('C2'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}}disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C5')): (setC(c-1),   details[0].splice(  details[0].indexOf('C5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C6')): (setC(c-1),   details[0].splice(  details[0].indexOf('C6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C9')): (setC(c-1),   details[0].splice(  details[0].indexOf('C9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C10')): (setC(c-1),   details[0].splice(  details[0].indexOf('C10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C13')): (setC(c-1),   details[0].splice(  details[0].indexOf('C13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C14')): (setC(c-1),   details[0].splice(  details[0].indexOf('C14'), 1) )  } />
</IconButton>
    </Stack>
    </div>

    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  style={{color:"red"}}disableRipple   >
C <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C1')): (setC(c-1),   details[0].splice(  details[0].indexOf('C1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C2')): (setC(c-1),   details[0].splice(  details[0].indexOf('C2'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C5')): (setC(c-1),   details[0].splice(  details[0].indexOf('C5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C6')): (setC(c-1),   details[0].splice(  details[0].indexOf('C6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C9')): (setC(c-1),   details[0].splice(  details[0].indexOf('C9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C10')): (setC(c-1),   details[0].splice(  details[0].indexOf('C10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C13')): (setC(c-1),   details[0].splice(  details[0].indexOf('C13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C14')): (setC(c-1),   details[0].splice(  details[0].indexOf('C14'), 1) )  } />
</IconButton>
    </Stack>
    </div>

        <hr/>
    
    
    
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack  direction="row"  spacing={2}>
 <IconButton style={{color:"red"}} disableRipple   >
D <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D2'), 1) )  } />
</IconButton>
<IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D14'), 1) )  } />
</IconButton>
    </Stack>
    </div>


    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  style={{color:"red"}}disableRipple   >
E <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E2'), 1) )  } />
</IconButton>
<IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E6'), 1) )  } />
</IconButton>
<IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E10'), 1) )  } />
</IconButton>
 <IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E14'), 1) )  } />
</IconButton>
    </Stack>
    </div>
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton style={{color:"red"}} disableRipple   >
F <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F2'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}}disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F14'), 1) )  } />
</IconButton>
    </Stack>
    </div>
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  style={{color:"red"}} disableRipple   >
G <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G2'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G6'), 1) )  } />
</IconButton>
<IconButton style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G10'), 1) )  } />
</IconButton>
 <IconButton  style={{color:"red"}} disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G14'), 1) )  } />
</IconButton>
    </Stack>

    </div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginRight:"-200px"}}>
<Link to={'/home'} style={{color:"red",textDecoration:"none"}} className='text-center  container p-5  fs-3 fw-bolder'>Book Now</Link>
</div>

      

   





   </>
  )
}

export default Seat