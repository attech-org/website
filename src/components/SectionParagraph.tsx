import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6.8rem 4.25rem;
  @media (max-width: 1200px) {
    padding: 4.25rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 45%;
  line-height: 2rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
`;

const SectionParagraph: React.FunctionComponent = () => (
  <Container>
    <ContentWrapper>
      <Content>
        <Title>We make IT happen</Title>
      </Content>
      <Content>
        <Text>
          We`re developers, designers and business people who like having fun
          after hours. We have years of experience building scalable businesses,
          creating digital products and helping our clients become a success.
        </Text>
      </Content>
    </ContentWrapper>
  </Container>
);

export default SectionParagraph;
