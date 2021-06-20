import React, { Component } from 'react';
import styled, {keyframes, css}  from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

import {FaUniversity} from 'react-icons/fa';
import {AiFillCode} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {MdPermContactCalendar} from 'react-icons/md';



const Title = styled.div`
    font: 100 5rem 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: $black;
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
    max-width: 350px;
`
const IconText = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-in-out;
`
const IconStyle = css`
    color: white;
    background: gray;
    padding: 14px;
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
    margin-top:-25;
    font-family: 'Montserrat', sans-serif;
    font-weight:300;
`
/*************  Wrapper *************\
\*************         *************/

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


const Wrapper = styled.div`
    background: #FFFFFF;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    display: flex;
    width:100vw;
    height:100vh;
    transition: all .3s;
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
                        <Col sm={3} md={3} lg={3}><IconText id = 'eduicon'><IconEducation size='60' ></IconEducation></IconText><Text id='edu'>Education</Text></Col>
                        <Col sm={3} md={3} lg={3}><IconText id = 'expicon'><IconExperience size='60'></IconExperience></IconText><Text id='exp'>Experience</Text> </Col>
                        <Col sm={3} md={3} lg={3}><IconText id = 'prjicon'><IconProject size='60'></IconProject></IconText> <Text id='prj'>Project</Text></Col>
                        <Col sm={3} md={3} lg={3}><IconText id = 'ctcicon'><IconContact size='60'></IconContact></IconText> <Text id='ctc'>Contact</Text></Col>                                                                                 
                    </Row>
              
                </IconsWrapper>

            </Wrapper>  
        )
    }
}
