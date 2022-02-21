import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 8rem;
  @media (max-width: 1200px) {
    padding: 4.25rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
  padding: 0 1rem;
  margin-bottom: 4.25rem;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 1.6rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
`;

const Logo = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionWithPhotoSecond: React.FunctionComponent = () => (
  <Container>
    <ContentWrapper>
      <Content>
        <Title>Contact Us</Title>
        <Text>
          <Link to="/" className="styledLink">
            Appnroll Sp. z o.o
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            Jana Czeczota 9,
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            02-607 Warsaw, Poland
          </Link>
        </Text>
      </Content>
      <Content>
        <Title>Additional Info</Title>
        <Text>
          <Link to="/" className="styledLink">
            Get in touch
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            Privacy policy
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            Careers
          </Link>
        </Text>
      </Content>
      <Content>
        <Title>Social media</Title>
        <Text>
          <Link to="/" className="styledLink">
            Instagram
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            linkedIn
          </Link>
        </Text>
        <Text>
          <Link to="/" className="styledLink">
            Facebook
          </Link>
        </Text>
      </Content>
    </ContentWrapper>
    <Link to="/" className="styledLink">
      <Logo>attech-org</Logo>
    </Link>
  </Container>
);

export default SectionWithPhotoSecond;
