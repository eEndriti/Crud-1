import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg" className="mt-4 justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-light text-dark" to="/">
                        Personi
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-light text-dark" to="/vendi">
                        Vendi
                    </NavLink>               
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}