import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components';

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


export default class Experience extends Component {
    render() {
        return (
            <Wrapper>
                <Header>Education</Header>
								<SubHeader>Memorial University of Newfoundland </SubHeader>
                <Content>Bachelor of Science in Computer Science (2018-current)</Content>
								<SubHeader>Harbin Institute of Technology</SubHeader>
                <Content>Bachelor of Science in Finance (2012-2016)</Content>
            </Wrapper>
        )
    }
}
