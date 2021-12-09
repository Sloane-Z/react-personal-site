import React from 'react'
import styled from 'styled-components';
import '../styles/project.css';
import {Navbar, Container, Nav, NavDropdown, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion/dist/es/index'
import {
	Blokus_Cover,
  Chomp_Cover,
  TwoDPlatform_Cover,
  PathFinding_Cover,
  SaveTheBunny_Cover,
	FallingBall_Cover} from '../images';
const Wrapper = styled.div`
	text-align:left;
	padding-left:10%;
	padding-right:10%;
`
const Header = styled.h1`
	font-family: 'Montserrat', serif; 
	font-weight: 700; 
	color: #9C9C9C; 
	font-weight: 400; 
	font-size: 30px; 
	display: inline-block;

	::after{
	content: ''; 
		display: block; 
		border-bottom: 1px solid #DFDFDF; 
		padding-top: 3px;
	}

`


export default class Project extends React.Component {
	render() {
		return (
			<Wrapper>
				<Header>Project</Header>
				<div id='gallery' className='container-fluid'>
					
					<a href='https://www.stjohnslocalguide.com/' target='_blank' rel='noreferrer'><img src='https://cdn.escapismmagazine.com/gallery/593536c432fd7.jpeg' className="img-responsive" alt='St.Johns Local Guide'/></a>
					<a href='https://www.notion.so/Improve-A-search-Algorithm-using-Jump-Point-Search-aaecc4a77b7e416eb2fa0a5626fc98ca' target='_blank' rel='noreferrer'><img src={PathFinding_Cover} className="img-responsive" alt='Pathfinding'/></a>
					<a href='https://www.notion.so/Save-The-Bunny-db3e068b72c44f5db3bbbd4fe7154613' target='_blank' rel='noreferrer'><img src={SaveTheBunny_Cover} className="img-responsive" alt='SaveTheBunny'/></a>
					<a href='https://www.notion.so/2D-Platform-Game-a12083c630ff4abf8c1c081263445d5f' target='_blank' rel='noreferrer'><img src={TwoDPlatform_Cover} className="img-responsive" alt='2DPlatform'/></a>			
					<a href='https://www.notion.so/Blokus-458278377c20428fa213cb5c2c5efda6' target='_blank' rel='noreferrer'>
						<img src={Blokus_Cover} className="img-responsive" alt='Blokus'></img>
					</a>
					<a href='https://www.notion.so/Chomp-f3c70a99c0624979b4ebabd256518724' target='_blank' rel='noreferrer'><img src={Chomp_Cover} className="img-responsive" alt='Chomp'/> </a>
					<a href='https://like-drive-2e2.notion.site/Falling-Ball-Game-9ca5d73d791141378f3ec4a623c77c2b' 
						 target='_blank' rel='noreferrer'>
						<img src={FallingBall_Cover} className="img-responsive" alt='Falling Ball Game'/>
					</a>
					
					
				</div>
				<Container fluid>
					<Row className = 'project-section'>
						<Col className='img-section' sm={7} md={7} lg={7}>	
								<a href='https://www.stjohnslocalguide.com/' target='_blank' rel='noreferrer'>
									<img className='img' src='https://cdn.escapismmagazine.com/gallery/593536c432fd7.jpeg' >
									</img>
									
									<div className ='proj-title' sm={12} md={12} lg={12}>
												<h3>St.John's Local Guide</h3>
									</div>
								</a>
						</Col>
						<Col className='info-section' sm={5} md={5} lg={5}>	
							<Row className='description' sm={5} md={5} lg={5}>
									sdfsdf
							</Row>
						</Col>
					</Row>

				</Container>
			</Wrapper>

		)
	}
}


