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
  // const { docTitle, header } = content as HomePage;
  return (
    <PageContainer>
      <Section>
        <Block>
          <H1>First section left title</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            veritatis quaerat eligendi mollitia tenetur, quas officiis, nisi
            adipisci aperiam vel numquam id deleniti delectus repellendus nulla,
            iste autem! Sit?
          </P>
        </Block>
        <Block>
          <img src="/icons/icon-512x512.png" alt="" />
        </Block>
      </Section>
      <Section>
        <Block>
          <img src="/icons/icon-512x512.png" alt="" />
        </Block>
        <Block>
          <H1>First section left title</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            veritatis quaerat eligendi mollitia tenetur, quas officiis, nisi
            adipisci aperiam vel numquam id deleniti delectus repellendus nulla,
            iste autem! Sit?
          </P>
        </Block>
      </Section>
      <Section>
        <Block>
          <H1>First section left title</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            veritatis quaerat eligendi mollitia tenetur, quas officiis, nisi
            adipisci aperiam vel numquam id deleniti delectus repellendus nulla,
            iste autem! Sit?
          </P>
        </Block>
        <Block>
          <img src="/icons/icon-512x512.png" alt="" />
        </Block>
      </Section>
      <Section>
        <Block>
          <img src="/icons/icon-512x512.png" alt="" />
        </Block>
        <Block>
          <H1>First section left title</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            veritatis quaerat eligendi mollitia tenetur, quas officiis, nisi
            adipisci aperiam vel numquam id deleniti delectus repellendus nulla,
            iste autem! Sit?
          </P>
        </Block>
      </Section>
      <Section>
        <Block>
          <H1>First section left title</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            veritatis quaerat eligendi mollitia tenetur, quas officiis, nisi
            adipisci aperiam vel numquam id deleniti delectus repellendus nulla,
            iste autem! Sit?
          </P>
        </Block>
      </Section>
    </PageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>attech.agency</title>;
