import React, { Component } from 'react';
import styled, {keyframes, css}  from 'styled-components';
import {FaUniversity} from 'react-icons/fa';
import {AiFillCode} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {MdPermContactCalendar} from 'react-icons/md';

const Wrapper = styled.div`
    background: #FFFFFF;
    width:100vw;
    height:100vh;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`

const Text = styled.div`
    font: 100 5rem 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: $black;
    max-width: 350px;
    margin: 0 auto;
    z-index: 2;
    color: #fff;
`

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

const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    z-index:2;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
`

/* icons */
const IconText = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-in-out;

  span{
    margin: 0 3%;
    font-size: 1.0rem;
    font-weight: 100;
    color:transparent;
    transition: all 0.5s ease-out;
  }
  &:hover{
      cursor:pointer;
      span{
          color:black;
      }
  }
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
        background: #fff;
        color: #3e4040;
    }
`

const IconEducation = styled(FaUniversity)`
    ${IconStyle};
`
const IconProject = styled(AiFillCode)`
    ${IconStyle};
`
const IconExperience = styled(MdWork)`
    ${IconStyle};
`
const IconContact = styled(MdPermContactCalendar)`
    ${IconStyle};
`

export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Text>
                    Sloane Zhang
                </Text>
                <CircleBkg>
                    <Circle1/>
                    <Circle2/>
                    <Circle3/>
                    <Circle4/>
                </CircleBkg>
                <IconsWrapper>
                    <IconText><IconEducation size='60'></IconEducation><span>Education</span></IconText>                         
                    <IconText><IconExperience size='60'></IconExperience><span>Experience</span></IconText>   
                    <IconText><IconProject size='60'></IconProject><span>Project</span></IconText>   
                    <IconText><IconContact size='60'></IconContact><span>Contact</span></IconText>                
                </IconsWrapper>

            </Wrapper>  
        )
    }
}
