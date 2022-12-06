import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import content from "../../content/pages/home.yml";
import { HomePage } from "../cms";
import styled from "styled-components";

const PageContainer = styled.main`
  background-color: #000020;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Section = styled.section`
  width: calc(100% - 5rem * 2);
  padding: 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  @media screen and (max-width: 700px) {
    width: calc(100% - 2rem * 2);
    padding: 2rem;
  }
`;

const Block = styled.div`
  flex-basis: calc(50% - 5rem * 2);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 3rem;
`;
const H2 = styled.h2`
  font-size: 2rem;
`;
const H3 = styled.h2`
  font-size: 1.5rem;
`;
const P = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;

const IndexPage: React.FC<PageProps> = () => {
  const { docTitle, section1, section2, section3, section4 } =
    content as HomePage;
  return (
    <PageContainer>
      <Section>
        <Block>
          <H1>{section1.title}</H1>
          <P>{section1.description}</P>
        </Block>
        <Block>
          <img src={section1.image} alt={section1.title} />
        </Block>
      </Section>
      <Section>
        <Block>
          <img src={section2.image} alt={section2.title} />
        </Block>
        <Block>
          <H1>{section2.title}</H1>
          <P>{section2.description}</P>
        </Block>
      </Section>
      <Section>
        <Block>
          <H1>{section3.title}</H1>
          <P>{section3.description}</P>
        </Block>
        <Block>
          <img src={section3.image} alt={section3.title} />
        </Block>
      </Section>
      <Section>
        <Block>
          <img src={section4.image} alt={section4.title} />
        </Block>
        <Block>
          <H1>{section4.title}</H1>
          <P>{section4.description}</P>
        </Block>
      </Section>
    </PageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>attech.agency</title>;
