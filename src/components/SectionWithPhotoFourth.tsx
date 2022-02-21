import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    padding: 0 4.25rem;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const Content = styled.div`
  width: 25%;
  padding: 0 4.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const TextContent = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 4rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  @media (max-width: 1000px) {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  &:nth-of-type(3) {
    margin-bottom: 2.5rem;
  }
`;

const Logo0 = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo1 = styled.p`
  display: none;
  font-size: 2.5rem;
  font-weight: 800;
  @media (max-width: 768px) {
    display: block;
    text-align: right;
  }
`;

const PhotoGallery = styled.div`
  width: 75%;
  height: 765px;
  background-image: url(https://via.placeholder.com/972x765/F6EDE8?text=Photo+Gallery);
  z-index: 1;
  @media (max-width: 1200px) {
    height: 500px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 500px) {
    height: 225px;
  }
`;

const SectionWithPhotoFourth: React.FunctionComponent = () => (
  <Container>
    <ContentWrapper>
      <Content>
        <TextContent>
          <Title>Awards</Title>
          <Text>Recognized by the designers` community.</Text>
          <Text>Loved by the users.</Text>
        </TextContent>
        <Logo0>
          <Link to="/" className="styledLink">
            attech-org
          </Link>
        </Logo0>
      </Content>
      <PhotoGallery />
      <Logo1>
        <Link to="/" className="styledLink">
          attech-org
        </Link>
      </Logo1>
    </ContentWrapper>
  </Container>
);

export default SectionWithPhotoFourth;
