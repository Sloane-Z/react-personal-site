import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
// Icons
import {SiLinkedin} from 'react-icons/si';
import {FaGithubAlt} from 'react-icons/fa';

//Style
import '../styles/contact.css';
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
	font-size: 19px;
	margin-bottom: 25px; 
	display:inline-block;
	margin-left:5px;
`
const ContentWrapper = styled.div`
	padding-left: 10px;
`

const Link = styled.a`
	color: black;
`
const SocialMedia = styled.div`

`
export default function Contact() {

	const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }
	return (
		<Wrapper>
			<Header>Contact</Header>
				<ContentWrapper>
					<Link href='https://www.linkedin.com/in/sloane-zhang/' target = "_blank" alt='Linkedin' rel='noreferrer'>
						
							<SiLinkedin size='25'></SiLinkedin>
							<Content>Linkedin</Content>
						
					</Link>	
				</ContentWrapper>
				<ContentWrapper>
					<Link href='https://github.com/Sloane-Z' target = "_blank" alt='GitHub' rel='noreferrer'>
						
							<FaGithubAlt size='25'></FaGithubAlt>
							<Content>GitHub</Content>
						
					</Link>	
				</ContentWrapper>
		</Wrapper>
	)
}
