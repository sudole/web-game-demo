import React, { Component } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css'

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <NavbarBrand tag={Link} to="/">Web Game Demo</NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}