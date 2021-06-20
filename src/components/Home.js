import React, { Component } from 'react';
import styled, {keyframes, css}  from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

import {FaUniversity} from 'react-icons/fa';
import {AiFillCode} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {MdPermContactCalendar} from 'react-icons/md';

/***   Animation  */
const showup = keyframes`
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
`

const slidein = keyframes`
    0% { margin-top:-25px; color: transparent;}
    20% { margin-top:-25px; color: transparent;}
    35% { margin-top:0px; color: black;}
    100% { margin-top:0px; color: black;}
`

const reveal =keyframes`
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
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
    #eduicon:hover ~ #edu{
        animation: ${slidein} 1.5s ease-in-out forwards;
        ::before{
            content:'Education';
        }
    }
    #expicon:hover ~ #exp{
        animation: ${slidein} 1.5s ease-in-out forwards;
        ::before{
            content:'Experience';
        }
    }
    #prjicon:hover ~ #prj{
        animation: ${slidein} 1.5s ease-in-out forwards;
        ::before{
            content:'Projects';
        }
    }
    #ctcicon:hover ~ #ctc{
        animation: ${slidein} 1.5s ease-in-out forwards;
        ::before{
            content:'Contact';
        }
    }
`

const Title = styled.div`
    font: 100 5rem 'Montserrat', sans-serif;
    text-transform: uppercase;
    max-width: 350px;
    margin: 0 auto;
    z-index: 2;
    color: #fff;
`
/*********   Circle  **********/
const CircleBkg = styled.div`
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const Circle = css`
  opacity: 1;
  position: absolute;
  width: 360px;
  height: 340px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${rotate}  11s infinite linear;
  background: #99c6c6;
`

const Circle1 = styled.div`
    ${Circle};
    
`
const Circle2 = styled.div`
    ${Circle};
    animation-duration: 5s;
`

const Circle3 = styled.div`
    ${Circle};
    animation-duration: 9s;

`

const Circle4 = styled.div`
    ${Circle};
    animation-duration: 3s;
`


/********  Icons ************/
const IconsWrapper = styled(Container)` 
    z-index:2;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    height: 4em;
    margin: 0;
    padding: 2%;
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
        cursor:pointer;
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



export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Title>
                    Sloane Zhang
                </Title>
                <CircleBkg>
                    <Circle1/>
                    <Circle2/>
                    <Circle3/>
                    <Circle4/>
                </CircleBkg>
                <IconsWrapper>
                    <Row >
                        <Col xs={3} sm={3} md={3} lg={3}><IconText id = 'eduicon'><IconEducation size='50' ></IconEducation></IconText><Text id='edu'> </Text></Col>
                        <Col xs={3} sm={3} md={3} lg={3}><IconText id = 'expicon'><IconExperience size='50'></IconExperience></IconText><Text id='exp'> </Text> </Col>
                        <Col xs={3} sm={3} md={3} lg={3}><IconText id = 'prjicon'><IconProject size='50'></IconProject></IconText> <Text id='prj'> </Text></Col>
                        <Col xs={3} sm={3} md={3} lg={3}><IconText id = 'ctcicon'><IconContact size='50'></IconContact></IconText> <Text id='ctc'> </Text></Col>                                                                                 
                    </Row>
              
                </IconsWrapper>

            </Wrapper>  
        )
    }
}
