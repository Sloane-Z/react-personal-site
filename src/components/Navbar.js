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
const StyledNav = styled(Nav)`
    .nav-link{
        border-right: 2px solid gray;
    }
    .nav-link:last-of-type{
        border-right: none;
    }

`
const StyledNavDropdown = styled(NavDropdown)`
`

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
                            <StyledNav.Link href="/">Home</StyledNav.Link>
                            
                            <StyledNav.Link href="/Education">Education</StyledNav.Link>
                            <StyledNav.Link href="/Experience">Experience</StyledNav.Link>
                            <StyledNav.Link href="/Project">Project</StyledNav.Link>
                            <StyledNav.Link href="/Contact">Contact</StyledNav.Link>
                        </StyledNav>
                        </StyledNavbar.Collapse>
                    </NavbarCol>
                </Row>
            </StyledContainer>
            </StyledNavbar>
        )
    }
}
