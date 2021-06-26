import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import styled, { keyframes, css } from 'styled-components';

/***** Keyframes *****/
const fadeIn = keyframes`
	0%   {opacity:0;}
	20%  {opacity:0.3;}
	50%  {opacity:0.5;}
	80%  {opacity:0.8;}
	100% {opacity:1;}
`

const slideUp = keyframes`
  0%{
		transform: translateY(100px)
	}  
  100%{
		transform: translateY(0)
	}
`
const slideRight = keyframes`
  0%{
		transform: translateX(-200px)
	}  
  100%{
		transform: translateX(0)
	}
`

const fadeOut = keyframes`
	0%{opacity:1; margin-bottom: 20%;}
	20%{opacity:0.5; margin-bottom: 50%;}
	50%{opacity:0.3; margin-bottom: 60%;}
	80%{opacity:0; margin-bottom: 100%;}
	100%{opacity:0; margin-bottom: 100%;}
`
/****** Animation *****/

const fadeInAnim = css`
	animation: ${fadeIn} 1s linear forwards
`

const slideUpAnim = css`
	animation: ${slideUp} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
`
const slideRightAnim = css`
	animation: ${slideRight} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
`


/*********** */
const StyledNavbar = styled(Navbar)`
    justify-content: center !important;
		${slideRightAnim};
`
const StyledContainer = styled(Container)`
    align-items: center !important;                   /*Vertical*/
    justify-content: center !important;               /*horizontal*/
    text-align: center !important;
    display: grid !important;              /* Keep the Title on the top*/  
`

const Brand = styled(Navbar.Brand)`
	font-family: 'Great Vibes', cursive;
	
	font-size: 36px;
	justify-content: center !important; 
	align-items: center !important;
	text-align: center !important;

	font-family: 'Quattrocento Sans', sans-serif;
	text-transform: uppercase;
	font-weight: 700;

	white-space: nowrap;
	letter-spacing: -0.03em;
	height: 60px; 
	padding: 30px 10px 0 10px;
	line-height: 0px;	

`
const StyledNav = styled(Nav)`
  /**
		.nav-link{
			border-right: 2px solid gray;
	}
	.nav-link:last-of-type{
			border-right: none;
	}
	*/

	text-transform: uppercase;
	font-family: 'Quattrocento Sans', sans-serif;
	.nav-link{
		color: black !important;
		&:hover{
			color: red !important;
		}
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
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};
	}
	handleClick(){
		this.setState({isClicked: true});
	}

	render() {
			return (
					<StyledNavbar expand="lg">
					<StyledContainer>
							<Row md={12} lg={12} sm={12}>
									<BrandCol md={12} lg={12} sm={12}><Brand href="#home">Sloane Zhang</Brand></BrandCol>                      
							</Row>
							<Row md={12} lg={12} sm={12}>
									<NavbarCol md={12} lg={12} sm={12}>
											<StyledNavbar.Toggle aria-controls="basic-navbar-nav" />
											<StyledNavbar.Collapse id="basic-navbar-nav">
											<StyledNav className="me-auto">
													<StyledNav.Link href="/">Home</StyledNav.Link>                            
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
