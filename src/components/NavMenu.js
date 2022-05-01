import React, { Component } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import './NavMenu.css'

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <NavbarBrand tag={Link} to="/">Web Game Demo</NavbarBrand>
                    <NavbarCollapse>
                        <Nav className="me-auto">
                            <Link className="text-white" to="/">Home</Link>
                            <Link className="text-white" to="/game01">Game01</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}