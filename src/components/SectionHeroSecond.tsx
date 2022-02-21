import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2.6rem 4.25rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 2rem 1rem 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.8rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const Title = styled.p`
  font-size: 3.75rem;
  line-height: 4rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 1rem;
  @media (max-width: 1050px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 2.6rem;
  @media (max-width: 768px) {
    text-align: right;
    margin-left: auto;
  }
`;

const PhotoGallery = styled.div`
  width: 40%;
  height: 515px;
  background-image: url(https://via.placeholder.com/515/F6EDE8?text=Photo+Gallery);
  position: relative;
  @media (max-width: 1200px) {
    height: 450px;
  }
  @media (max-width: 1050px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 1.25rem 2.5rem;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    background-color: #4b4b4b;
    border: none;
  }
`;

const ButtonPrev = styled.button`
  border: none;
  padding: 0;
  position: absolute;
  top: calc((100% - 3rem) / 2);
  left: 5%;
  transition: 0.3s;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1050px) {
    height: 32px;
    width: 32px;
  }
`;

const ButtonNext = styled(ButtonPrev)`
  left: auto;
  top: calc((100% - 3rem) / 2);
  right: 5%;
`;

const SectionHeroSecond: React.FunctionComponent = () => (
  <Container>
    <Content>
      <SubTitle>Who we are</SubTitle>
      <Title>Want to rock the digital world with us?</Title>
      <Text>Product design, web & mobile developmentfor innovators</Text>
      <Button>Read more</Button>
    </Content>
    <PhotoGallery>
      <ButtonPrev>
        <StaticImage src="../images/arrowLeft.png" alt="Previous slide" />
      </ButtonPrev>
      <ButtonNext>
        <StaticImage src="../images/arrowRight.png" alt="Next slide" />
      </ButtonNext>
    </PhotoGallery>
  </Container>
);

export default SectionHeroSecond;
