import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styled, { keyframes, css } from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

import { FaUniversity } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { MdPermContactCalendar } from 'react-icons/md';

/***  keyframes *****/
const showup = keyframes`
	0% {opacity:0;}
	20% {opacity:1;}
	80% {opacity:1;}
	100% {opacity:0;}
`
const reveal = keyframes`
	0% {opacity:0;width:0px;}
	20% {opacity:1;width:0px;}
	30% {width:355px;}
	80% {opacity:1;}
	100% {opacity:0;width:355px;}
`

const slidein = keyframes`
	0% { margin-top:-25px; color: transparent;}
	20% { margin-top:-25px; color: transparent;}
	35% { margin-top:0px; color: black;}
	100% { margin-top:0px; color: black;}
`

const fadeOut = keyframes`
	0%{opacity:1;}
	20%{opacity:0.5;}
	50%{opacity:0.3;}
	80%{opacity:0;}
	100%{opacity:0;}
`

const rotate = keyframes`
	from {
			transform: rotate(0deg);
	}
	to {
			transform: rotate(360deg);
	}
`
const shrink = keyframes`
  100% {
    width: 0px;
    height: 0px;
  }
`
/***   Animation  ******/
const CircleLoopAnim = css`
  animation: ${rotate} 11s linear infinite ;
`

const CircleExitAnim = css`
  animation: ${shrink} 1s linear forwards;
`

const Static = css`

`
const FadeOutAnim = css`
	animation: ${fadeOut} 1s linear forwards;
`

/******  Font Style ******/

const TitleFont = css`

`
const IconLinkFont = css`
    font-size: 1.1rem;
    font-weight: 400;
    font-family: 'Playfair Display', serif;
`

/*************  Wrapper *************\
\*************         *************/
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all .3s;

		position: relative;
		box-sizing: border-box;
		background-size: cover;
		text-align: center;
		overflow: hidden !important;

    #eduicon:hover ~ #edu{
        animation: ${slidein} 1.5s ease-in-out forwards;
    }
    #expicon:hover ~ #exp{
        animation: ${slidein} 1.5s ease-in-out forwards;
    }
    #prjicon:hover ~ #prj{
        animation: ${slidein} 1.5s ease-in-out forwards;

    }
    #ctcicon:hover ~ #ctc{
        animation: ${slidein} 1.5s ease-in-out forwards;
    }
`

const Title = styled.div`
    font: 100 4rem 'Montserrat', sans-serif;
    text-transform: uppercase;
    max-width: 300px;
    margin: 0 auto;
    z-index: 2;
    color: #fff;
`
/*********   Circle  **********/

const Circle = css`
  opacity: 1;
  position: absolute;
  width: 360px;
  height: 340px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  background: #99c6c6;
`
const CircleBkg = styled.div`
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.anim};
`

const Circle1 = styled.div`
    ${Circle};
    ${props => props.anim};
`
const Circle2 = styled.div`
    ${Circle};
    animation-duration: 5s;
    ${props => props.anim};
`

const Circle3 = styled.div`
    ${Circle};
    animation-duration: 9s;
    ${props => props.anim};
`

const Circle4 = styled.div`
    ${Circle};
    animation-duration: 3s;
    ${props => props.anim};
`



/********  Icons ************/
const IconsWrapper = styled.div` 
    z-index:2;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    height: 4em;
    margin: 0;
    padding: 2%;
		${props => props.anim};
`
const IconText = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-in-out;
  &:hover {
    cursor:pointer;
  }
	
`
const IconStyle = css`
	color: white;
	background: gray;
	padding: 10px;
	border-radius: 50%;
	transition: all 150ms ease-in-out;
	background: #3e4040;
	color: #fff;
	&:hover {
			background: #fff;
			color: #3e4040;
	}
	
`

const IconEducation = styled(FaUniversity)`
	${IconStyle};

`
const IconExperience = styled(MdWork)`
	${IconStyle};
`
const IconProject = styled(AiFillCode)`
	${IconStyle};
`
const IconContact = styled(MdPermContactCalendar)`
	${IconStyle};
`
const Text = styled.div`
	color: transparent;
	margin-top:-200px;
	${IconLinkFont};
	&:hover {
			cursor:pointer;
	}
`
/*** BackUp *****/
const Square = styled.div`
  background-color: white !important;
  height: 50vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: flex;
  border-style:groove;
  border-color: black;

  /*** Font ***/
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: -0.03em;
`

const SqaureContainer = styled(Container)`
	transition: all .3s;
	height: 100%;
	z-index: -1;    
	position: absolute;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding:0;
	.row{
			--bs-gutter-x: none;
			.col{
					padding:0;
			}
	}
`


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};
	}

	componentDidMount() {

	}
	componentDidUpdate() {

	}

	handleClick(e, link) {
		this.setState({ isClicked: true });
		e.preventDefault();
		setTimeout(() => {
			this.props.history.push(link)
		}, 1000)
	}

	animTransition() {

	}

	render() {
		return (
			<Wrapper>

				<Title>
					Sloane Zhang
				</Title>
				<CircleBkg anim={this.state.isClicked ? CircleExitAnim : CircleLoopAnim}>
					<Circle1 anim={this.state.isClicked ? CircleExitAnim : CircleLoopAnim} />
					<Circle2 anim={this.state.isClicked ? CircleExitAnim : CircleLoopAnim} />
					<Circle3 anim={this.state.isClicked ? CircleExitAnim : CircleLoopAnim} />
					<Circle4 anim={this.state.isClicked ? CircleExitAnim : CircleLoopAnim} />
				</CircleBkg>
				<IconsWrapper anim={this.state.isClicked ? FadeOutAnim : Static}>
					<Row >

						<Col xs={4} sm={4} md={4} lg={4}>
							<Link to='/Experience' onClick={(e, link) => this.handleClick(e, '/Experience')} style={{ textDecoration: 'none' }}>
								<IconText id='expicon'>
									<IconExperience size='50' />
								</IconText>
								<Text id='exp'>Experience</Text>
							</Link>
						</Col>

						<Col xs={4} sm={4} md={4} lg={4}>
							<Link to='/Project' onClick={(e, link) => this.handleClick(e, '/Project')} style={{ textDecoration: 'none' }}>
								<IconText id='prjicon'>
									<IconProject size='50' />
								</IconText>
								<Text id='prj'>Project</Text>
							</Link>
						</Col>
						<Col xs={4} sm={4} md={4} lg={4}>
							<Link to='/Contact' onClick={(e, link) => this.handleClick(e, '/Contact')} style={{ textDecoration: 'none' }}>
								<IconText id='ctcicon'>
									<IconContact size='50' />
								</IconText>
								<Text id='ctc' >Contact</Text>
							</Link>
						</Col>
					</Row>
				</IconsWrapper>
			</Wrapper>
		)
	}
}
export default withRouter(Home);