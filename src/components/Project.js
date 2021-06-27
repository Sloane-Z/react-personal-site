import React from 'react'
import styled, { keyframes, css } from 'styled-components';
import '../styles/project.css';
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

const SubHeader = styled.h1`
	font-family: 'Cardo', serif; 
	font-size: 19px; 
	line-height: 1.35em; 

`

const Content = styled.p`
  font-family: 'Quattrocento Sans', sans-serif;
	font-size: 14px;
	margin-bottom: 25px; 
`

export default class Project extends React.Component {
	render() {
		return (
			<Wrapper>
				<Header>Project</Header>
				<div id='gallery' className='container-fluid'>
				<img src="https://source.unsplash.com/1600x1200?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1024x768?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1366x768?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1920x1080?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/640x360?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/320x640?female,portrait" className="img-responsive"/>
				
				<img src="https://source.unsplash.com/800x600?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/600x800?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/400x600?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/600x400?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1100x1600?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1600x1100?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/992x768?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/768x992?female,portrait" className="img-responsive"/>
				<img src="https://source.unsplash.com/1200x1600?female,portrait" className="card img-responsive"/>
				</div>
			</Wrapper>

		)
	}
}


