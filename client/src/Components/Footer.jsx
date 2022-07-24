import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,

  } from 'mdb-react-ui-kit';

function Footer(){

    return(
        
<MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>

        
          
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>EVENTS HENRY</h5>

            <p>
            Diseñado y construido con todo el amor del mundo por el equipo de HENRY EVENTS con la ayuda de nuestros colaboradores .
                                             version: 1.0
            </p>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://github.com/Hecatonquir/Final_Project_18-07-2022' className='text-white'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='/aboutUs' className='text-white'>
                  About Us
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='#!'>
          EVENTS HENRY
        </a>
      </div>
    </MDBFooter>
     
    


    )
}

export default Footer;





    
 
