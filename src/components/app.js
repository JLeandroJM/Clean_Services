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
  padding: 0 5vw; /* Ajuste de espaciado horizontal */
`;

const Navbar = styled.nav`
  width: 100%;
  height: 10vh; /* Ajustar altura de la barra de navegación */
  padding: 1vh 2vw; /* Ajustar espaciado dentro de la barra de navegación */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 5vw; /* Ajuste de tamaño del logo */
  height: auto;
`;

const CompanyName = styled.h1`
  font-size: 3vw; /* Ajuste de tamaño de fuente para dispositivos grandes */
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
    font-size: 3.2vw; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;


const Label2 = styled.h1`
  font-size: 4vw; /* Ajuste de tamaño de fuente para dispositivos grandes */
  font-weight: bold;
  font-family: 'Berlin Sans FB', sans-serif;
  color: white;
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
    font-size: 3.5vw; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;


const StyledImage = styled.img`
  width: 90%;
  max-width: 90%;
  height: auto;
`;

const Label = styled.h2`
  font-size: 4vw; /* Ajuste de tamaño de fuente para dispositivos grandes */
  font-weight: bold;
  font-family: 'Eras Bold ITC', sans-serif;
  color: white;
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
    font-size: 3.5vw; /* Reducimos el tamaño de fuente para dispositivos móviles */
  }
`;






const NavLink = styled.a`
  font-size: 1.5vw; /* Ajuste de tamaño de fuente para enlaces de navegación */
  font-family: 'Berlin Sans FB', sans-serif;
  color: black;
  margin: 0 1vw; /* Ajuste de espaciado horizontal */
  text-decoration: none; /* Evita que los enlaces se subrayen */
  &:hover {
    font-size: 26px; /* Tamaño aumentado al pasar el mouse */
  }
`;


const Button = styled.button`
font-size: 2vw; /* Ajuste de tamaño de fuente para el botón */
font-family: 'Berlin Sans FB', sans-serif;
color: white;
background-color: #17B1F4;
border: none;
border-radius: 2vw; /* Ajuste del radio del borde del botón */
padding: 1vh 2vw; /* Ajuste del espaciado dentro del botón */
cursor: pointer;
transition: font-size 0.3s ease;
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
          <NavLink href="#1" top="50%" left="50%">HOME</NavLink>
          <NavLink href="#2" top="50%" left="59%">SERVICES</NavLink>
          <NavLink href="#3" top="50%" left="70%">ABOUT US</NavLink>
          <NavLink href="#4" top="50%" left="80%">CONTACT US</NavLink>
        </div>
      </Navbar>
      <StyledImage src={landing} alt="Mi imagen" />
      {/* Labels */}
      <Label top="16%" left="13%">NEED HELP</Label>
      <Label2 top="28%" left="22%">WITH</Label2>
      <Label top="35%" left="13%">CLEANING?</Label>
      <Button>CONTACT</Button> {/* Botón añadido */}
      
    </Container>
  );
}

export default App;
