import React, { Component } from 'react';
import { Navbar ,Nav,Form,FormControl,Button,/*NavDropdown,*/Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../sources/logo.svg';
import '../css/App.css';

class navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            class:'activate',
         }
    }

   
    render(){
       
        return(
           
            <Navbar bg="light" expand="lg" className='border-bottom' fixed='top'>
             <Container>
                <NavLink to='/'>
                <Navbar.Brand>
                    <img width={100} alt='kumparan' 
                        src={logo} />
                </Navbar.Brand>
                </NavLink> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <div className='nav-link'>
                        <NavLink to="/" className='link-hover '><i className='fa fa-home'></i> Home
                        </NavLink>
                        </div>
                        <div className='nav-link'>
                        <NavLink to="/users" className='link-hover'><i className='fa fa-user'></i> Users
                        </NavLink>
                        </div>
                        <div className='nav-link'>
                        <NavLink to="/albums" className='link-hover'><i className='fa fa-images'></i> Albums
                        </NavLink>
                        </div>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        );
    }
}
export default navigation;

