import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { Copyright } from './Copyright';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
                <hr />
                <Copyright />
            </div>
        );
    }
}