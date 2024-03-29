import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components';

import workData from '../content/expData';

/***** Keyframes *****/
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

const slideLeft = keyframes`
  0%{
		transform: translateX(500px)
	}  
  100%{
		transform: translateX(0)
	}
`
/****** Animation *****/

const slideUpAnim = css`
	animation: ${slideUp} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
`
const slideRightAnim = css`
	animation: ${slideRight} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
`
const slideLefttAnim = css`
	animation: ${slideLeft} 1s cubic-bezier(0.65, 0, 0.35, 1) both;
`

const Wrapper = styled.div`
	text-align:left;
	padding-left:10%;
	padding-right:10%;
	padding-top: 20px;
	padding-bottom: 20px; 
	
`
const Header = styled.h1`
	font-family: 'Montserrat', serif; 
	font-weight: 700; 
	color: #9C9C9C; 
	font-weight: 400; 
	font-size: 30px; 
	display: inline-block;

	padding-left: 0;
	${slideRightAnim};
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
	font-weight: bold;
	line-height: 1.35em; 
	padding-left: 0;
	margin-top:10px;
	text-align: left;

`

const Content = styled.p`
  font-family: 'Quattrocento Sans', sans-serif;
	font-size: 16px;
	margin:0;
	margin-bottom: 10px;
`
const Responsibility = styled.p`
  font-family: 'Quattrocento Sans', sans-serif;
	font-size: 16px;
	::before{
		content:'{'\u2B24'}',
	}
	margin:0;
	
`

const SubTitle = styled.p`
	font-family: 'Quattrocento Sans', sans-serif;
	font-size: 16px;
	font-style: bold;
	margin-bottom: 0px;
`

const ContentWrapper = styled.div`
	${slideLefttAnim};
`
const InfoWrapper = styled.div`
	margin-bottom: 15px;
`
export default class Experience extends Component {
	render() {
		return (
			<>
			<Wrapper>
				<Header>Education</Header>
					<ContentWrapper>
							<SubHeader>Memorial University of Newfoundland, Canada</SubHeader>
							<Content>Bachelor of Science in Computer Science (Sep 2018 - Dec 2021)</Content>
					</ContentWrapper>
					<ContentWrapper>
						<SubHeader>Harin Institue of Technology, China</SubHeader>
						<Content>Bachelor of Economics in Finance (Aug 2012 - July 2016)</Content>
					</ContentWrapper>
				<hr></hr>
				<Header>Work</Header>
				<ContentWrapper>
					{
							workData.map((item, index)=>(
								<>
								
								<SubHeader>{item.company}</SubHeader>
								
								<InfoWrapper>
									<Content>{item.title} ({item.timeRange})</Content>
									<Content>{item.location}</Content>
									
								</InfoWrapper>		
								<SubTitle>{item.techStack ==='' ? '':(<strong>TechStack: </strong>)}{item.techStack}</SubTitle>		
								{
									item.responsibility.map((item)=>(
										<Responsibility>{'\u2022'} {item}</Responsibility>
									))
								}
								</>
							))
						}
				</ContentWrapper>
				<hr></hr>


			</Wrapper>
			</>
		)
	}
}
