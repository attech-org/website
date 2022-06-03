import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    padding: 4.25rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 0 0;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  width: calc(50% - 4.25rem * 2);
  padding: 0 4.25rem;
  font-size: 3.75rem;
  display: flex;
  align-items: center;
  font-weight: 800;
  line-height: 4rem;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 0 2rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
    font-weight: 700;
    justify-content: center;
  }
`;

const PhotoGallery = styled.div`
  width: 50%;
  background-image: url(https://via.placeholder.com/700?text=Photo+Gallery);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1200px) {
    width: 100%;
    min-height: 500px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 320px;
  }
`;

const Title = styled.p`
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SectionHeroFirst: React.FunctionComponent = () => (
  <Container>
    <Content>
      <Title>Want to rock the digital world with us?</Title>
    </Content>
    <PhotoGallery />
  </Container>
);

export default SectionHeroFirst;
