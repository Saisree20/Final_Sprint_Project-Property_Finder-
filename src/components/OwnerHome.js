import React,{useState} from 'react';
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import AddProperty from './AddProperty';
import { useDispatch, useSelector } from "react-redux";
import {getProperty,getAllProperty} from "../actions/propertyAction";
import ViewProperty from './ViewProperty';
import LogoutIcon from '@mui/icons-material/Logout';
import propertyFinder from './propertyFinder.png';
const OwnerHome = () =>{
    const dispatch = useDispatch();
    const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
    const ownerPropertyResp = useSelector((state)=>state.getProperty.getPropertyResp)
    const allPropertyResp = useSelector((state)=>state.getAllProperty.getAllPropertyResp)
    const [showPropertyAddModal,setShowPropertyAddModal]=useState(false);
    const [showOwnerProperty,setShowOwnerProperty] = useState(false);
    const [showAllProperty,setShowAllProperty] = useState(false);
    window.onload = function () {
        if(!loginResp)
            window.location = "/";
        }.bind(this);
    return (
        <>
            <AddProperty
                show={showPropertyAddModal}
                onHide={()=>{setShowPropertyAddModal(false)}}
            />
<div style={{backgroundImage: 'linear-gradient(#91F741,#F5FAF2)'}}>
            <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/" style={{fontSize:'30px',fontWeight:'bold',color:'black'}}><span><img  src={propertyFinder}  style={{width:'60px',borderRadius:'30px'}}/></span>&nbsp;Property Finder<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link 
                            style={{ paddingLeft: '300px',fontWeight:'bold',fontSize:'20px',color:'black' }}
                            onClick={()=>{setShowPropertyAddModal(true)}}>Add Property</Nav.Link>
                            <Nav.Link  style={{ fontWeight:'bold',fontSize:'20px',color:'black'}}  onClick={()=>{
                                dispatch(getProperty(loginResp.data.userName))
                                setShowAllProperty(false);
                                setShowOwnerProperty(!showOwnerProperty);
                            }}>View My Property</Nav.Link>
                            <Nav.Link  style={{ fontWeight:'bold',fontSize:'20px',color:'black'}} onClick={()=>{
                                dispatch(getAllProperty());
                                setShowAllProperty(!showAllProperty);
                                setShowOwnerProperty(false)
                            }}>View All Properties</Nav.Link>
                            <Nav.Link style={{paddingLeft: '440px',fontWeight:'bold',fontSize:'20px',color:'black'}}
                          
                            href="/"> <LogoutIcon/>Logout</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            
                    </Container>
                </Navbar>

            {
                showOwnerProperty?
                <ViewProperty
                    data = {ownerPropertyResp}
                    editable
                />:
                null
            }
            {
                showAllProperty?
                <ViewProperty
                    data = {allPropertyResp}
                    isAll
                />:
                null
            }
            </div>
        </>
    )
}

export default OwnerHome;