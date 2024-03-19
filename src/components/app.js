import React from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import styled from 'styled-components';

const cld = new Cloudinary({ cloud: { cloudName: 'dd894son5' } });

const Container = styled.div`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100vh; /* Asegura que el contenedor ocupe todo el alto de la ventana */
`;

const StyledImage = styled.img`
  width: 400px;
  height: 600px;
`;

function App() {
  const imageUrl = cld.image('logo_clean').toURL();

  return (
    <Container>
      <StyledImage src={imageUrl} alt="Mi imagen" />
    </Container>
  );
}

export default App;
