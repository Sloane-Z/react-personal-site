import React from 'react'
import styled from 'styled-components';
import '../styles/project.css';

import {
	Blokus_Cover,
  Chomp_Cover,
  TwoDPlatform_Cover,
  PathFinding_Cover,
  SaveTheBunny_Cover} from '../images';
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
					<a href='https://fall-game-lovat.vercel.app' target='_blank' rel='noreferrer'><img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d91f7435-279d-42a1-9c45-87dfacc10499/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210812T201708Z&X-Amz-Expires=86400&X-Amz-Signature=9863ebfa6a120021cc2b29569b7e874e0c211c13d5f23e6fba538fa0f332b625&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22' className="img-responsive" alt='Falling Ball Game'/> </a>
					
					
				</div>
			</Wrapper>

		)
	}
}


