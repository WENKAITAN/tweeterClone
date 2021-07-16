import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class Navigation extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" style={{marginRight: "15px"}}>Home</Link>
                    <Link to="/new">New Tweet</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default Navigation