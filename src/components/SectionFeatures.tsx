import { StaticImage } from 'gatsby-plugin-image';
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
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
`;

const Content = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  line-height: 1.8rem;
  @media (max-width: 1200px) {
    flex-basis: 45%;
    margin-bottom: 4.25rem;
  }
  @media (max-width: 768px) {
    flex-basis: 65%;
    padding: 0;
  }
  @media (max-width: 500px) {
    flex-basis: auto;
    margin-bottom: 2rem;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin: 1.5rem 0 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;

const SectionFeatures: React.FunctionComponent = () => (
  <Container>
    <ContentWrapper>
      <Content>
        <StaticImage
          src="../images/pen.png"
          width={36}
          height={36}
          alt="Icon pen"
        />
        <Title>Product design</Title>
        <Text>
          A business analysis that challenges your idea and translates it into a
          tailor-made plan. An intuitive user experience that fulfills your
          business goals.
        </Text>
      </Content>
      <Content>
        <StaticImage
          src="../images/bracket.png"
          width={36}
          height={36}
          alt="Icon bracket"
        />
        <Title>Web development</Title>
        <Text>
          Creating world-class web apps requires vision, experience and focus on
          your clients. We use these skills to build web products and MVPs.
        </Text>
      </Content>
      <Content>
        <StaticImage
          src="../images/smartphone.png"
          width={36}
          height={36}
          alt="Icon smartphone"
        />
        <Title>Mobile development</Title>
        <Text>
          We know what makes mobile apps successful: it’s the customers who love
          using it. That’s why we create custom-made apps that stand out.
        </Text>
      </Content>
    </ContentWrapper>
  </Container>
);

export default SectionFeatures;
