import React, { Component } from 'react';
import styled, {keyframes, css}  from 'styled-components';
import Typed from "react-typed";

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
            </Wrapper>  
        )
    }
}
