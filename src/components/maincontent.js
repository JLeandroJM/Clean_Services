import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({ cloud: { cloudName: 'dd894son5' } });

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 89%; /* Ancho máximo del contenedor para limitar el tamaño */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
`;

const GalleryImageContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espacio entre las imágenes */
  align-items: center;
  width: 100%; /* Ocupa la mitad del contenedor */
  transition: transform 0.5s ease; /* Efecto de transición */
`;

const GalleryImage = styled.img`
  width: 45%; /* Tamaño de cada imagen */
  height: auto;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

function MainContent() {
  const images = [
    cld.image('samples/clean/image1').toURL(),
    cld.image('samples/clean/image2').toURL(),
    cld.image('samples/clean/image3').toURL(),
    cld.image('samples/clean/image4').toURL()
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 2000); // Cambiar de imagen cada 2 segundos
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToPreviousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div>
      <ImageGallery>
        <NavButton onClick={goToPreviousImage}>{'<'}</NavButton>
        <GalleryImageContainer style={{ transform: `translateX(-${currentImageIndex * 50}%)` }}> {/* Mover las imágenes */}
          {images.map((image, index) => (
            <GalleryImage key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </GalleryImageContainer>
        <NavButton onClick={goToNextImage}>{'>'}</NavButton>
      </ImageGallery>
    </div>
  );
}

export default MainContent;
