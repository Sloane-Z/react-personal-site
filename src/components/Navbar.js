import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const StyledNavbar = styled(Navbar)`
    justify-content: center !important;

`
const StyledContainer = styled(Container)`
    align-items: center !important;                   /*Vertical*/
    justify-content: center !important;               /*horizontal*/
    text-align: center !important;
    display: grid !important;              /* Keep the Title on the top*/
       
`

const Brand = styled(Navbar.Brand)`
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;
    justify-content: center !important; 
    align-items: center !important;
    text-align: center !important;
`
const StyledNav = styled(Nav)``
const StyledNavDropdown = styled(NavDropdown)``

const BrandCol = styled(Col)`
    margin:5% auto;
`
const NavbarCol = styled(Col)`

`
export default class navbar extends Component {


    render() {
        return (
            <StyledNavbar bg="light" expand="lg" fixed='top'>
            <StyledContainer>
                <Row md={12} lg={12} sm={12}>
                    <BrandCol md={12} lg={12} sm={12}><Brand href="#home">Sloane Zhang</Brand></BrandCol>                      
                </Row>
                <Row  md={12} lg={12} sm={12}>
                    <NavbarCol md={12} lg={12} sm={12}>
                        <StyledNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <StyledNavbar.Collapse id="basic-navbar-nav">
                        <StyledNav className="me-auto">
                            <StyledNav.Link href="#home">Home</StyledNav.Link>
                            <StyledNav.Link href="#link">Education</StyledNav.Link>
                            <StyledNav.Link href="#link">Experience</StyledNav.Link>
                            <StyledNav.Link href="#link">Project</StyledNav.Link>
                            <StyledNav.Link href="#link">Contact</StyledNav.Link>
                            <StyledNavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <StyledNavDropdown.Item href="#action/3.1">Action</StyledNavDropdown.Item>
                            <StyledNavDropdown.Item href="#action/3.2">Another action</StyledNavDropdown.Item>
                            <StyledNavDropdown.Item href="#action/3.3">Something</StyledNavDropdown.Item>
                            <StyledNavDropdown.Divider />
                            <StyledNavDropdown.Item href="#action/3.4">Separated link</StyledNavDropdown.Item>
                            </StyledNavDropdown>
                        </StyledNav>
                        </StyledNavbar.Collapse>
                    </NavbarCol>
                </Row>

            </StyledContainer>
            </StyledNavbar>
        )
    }
}
