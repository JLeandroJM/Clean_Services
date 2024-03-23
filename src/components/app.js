import React , { useState } from 'react';
import styled, { css } from 'styled-components';

import { Cloudinary } from "@cloudinary/url-gen";
import berlinSansFB from '../fonts/Berlin.ttf';
import ErasBD from '../fonts/erasbd.ttf';
import MainContent from './maincontent';

const cld = new Cloudinary({ cloud: { cloudName: 'dd894son5' } });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Establece posición relativa para poder posicionar los labels */
  padding: 0 20px;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  margin-right: 70px;
  margin-left: 100px;
`;

const CompanyName = styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Berlin Sans FB', sans-serif;

  @font-face {
    font-family: 'Berlin Sans FB';
    src: url(${berlinSansFB}) format('truetype');
  }
  background: linear-gradient(45deg, #17B1F4, #6A0DAD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 32px; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;

const Label2 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-family: 'Berlin Sans FB', sans-serif;
  color:white;
  @font-face {
    font-family: 'Berlin Sans FB';
    src: url(${berlinSansFB}) format('truetype');
  }
 
  position: absolute;
  /* Estilos condicionales para ajustar la posición */
  ${({ top }) => (top && `top: ${top};`)}
  ${({ left }) => (left && `left: ${left};`)}
  ${({ right }) => (right && `right: ${right};`)}
  ${({ bottom }) => (bottom && `bottom: ${bottom};`)}

  @media screen and (max-width: 768px) {
    font-size: 40px; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;

const StyledImage = styled.img`
  width: 85%;
  max-width: 85%;
  height: auto;
`;

const Label = styled.h2`
  font-size: 60px;
  font-weight: bold;
  font-family: 'Eras Bold ITC', sans-serif;
  color:white;
  @font-face {
    font-family: 'Eras Bold ITC';
    src: url(${ErasBD}) format('truetype');
  }
  
  position: absolute;
  /* Estilos condicionales para ajustar la posición */
  ${({ top }) => (top && `top: ${top};`)}
  ${({ left }) => (left && `left: ${left};`)}
  ${({ right }) => (right && `right: ${right};`)}
  ${({ bottom }) => (bottom && `bottom: ${bottom};`)}

  @media screen and (max-width: 768px) {
    font-size: 48px; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;





const NavLink = styled.a`
  font-size: 18px;
  font-family: 'Berlin Sans FB', sans-serif;
  color: black;
  margin: 0 10px;
  text-decoration: none; /* Evita que los enlaces se subrayen */

  /* Estilos condicionales para ajustar la posición */
  ${props => props.top && css`
    position: absolute;
    top: ${props.top};
  `}
  ${props => props.left && css`
    position: absolute;
    left: ${props.left};
  `}
  ${props => props.right && css`
    position: absolute;
    right: ${props.right};
  `}
  ${props => props.bottom && css`
    position: absolute;
    bottom: ${props.bottom};
  `}

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    font-size: 20px; /* Tamaño aumentado al pasar el mouse */
  }
`;


const Button = styled.button`
  font-size: 30px;
  font-family: 'Berlin Sans FB', sans-serif;
  color: white;
  background-color: #17B1F4;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  position: absolute;
  top: 57%;
  left: 26%;
  transform: translate(-50%, -50%);
  transition: font-size 0.3s ease; /* Agrega una transición para suavizar el efecto de cambio de tamaño */

  &:hover {
    font-size: 32px; /* Tamaño aumentado al pasar el mouse */
    text-decoration: none; /* Evita que el texto se subraye */
  }
`;



function App() {
  const logo = cld.image('samples/clean/logo').toURL();
  const landing = cld.image('samples/clean/landing1').toURL();

  return (
    <Container>
      <Navbar>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <CompanyName>CLEAN & GO</CompanyName>
        </LogoContainer>
        <div>
          <NavLink href="#" top="50%" left="53%">HOME</NavLink>
          <NavLink href="#" top="50%" left="61%">SERVICES</NavLink>
          <NavLink href="#" top="50%" left="70%">ABOUT US</NavLink>
          <NavLink href="#" top="50%" left="80%">CONTACT US</NavLink>
        </div>
      </Navbar>
      <StyledImage src={landing} alt="Mi imagen" />
      {/* Labels */}
      <Label top="16%" left="13%">NEED HELP</Label>
      <Label2 top="28%" left="22%">WITH</Label2>
      <Label top="35%" left="13%">CLEANING?</Label>
      <Button>CONTACT</Button> {/* Botón añadido */}
      <MainContent>
        {/* Contenido de la página */}
      </MainContent>
    </Container>
  );
}

export default App;
