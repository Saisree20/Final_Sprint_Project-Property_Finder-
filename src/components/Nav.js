import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import propertyFinder from "./propertyFinder.png";

const NavBar = ()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAdminUpdateModal,setShowAdminUpdateModal] = useState(false);
    const [showAddCustomerModal,setShowAddCustomerModal] = useState(false);
    const [showAddBillingModal,setShowAddBillingModal]= useState(false);

    return( 
        <> 
            <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/" style={{fontSize:'30px',fontWeight:'bold',color:'black'}}><span><img  src={propertyFinder} style={{width:'60px',borderRadius:'30px'}}/></span>&nbsp;Property Finder<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px',fontWeight:'bold',color:'white' }}
                            navbarScroll
                        >
                            {/* <Nav.Link onClick={()=>{dispatch(getResults())}}>View Results</Nav.Link>*/}
                            <Nav.Link
                            style={{ paddingLeft: '440px',fontSize:'20px',color:'black' }}
                             onClick={()=>{navigate('/customerLogin');}}>Customer Login</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Nav.Link  style={{fontSize:'20px',color:'black'}} onClick={()=>{navigate('/ownerLogin');}}>Owner Login</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBar;