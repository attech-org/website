import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
import styled from 'styled-components'

const PageContainer = styled.main`
  background-color: #000020;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

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
`

const Block = styled.div`
  flex-basis: calc(50% - 5rem * 2);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.5rem;
`
const GetStartedBlock = styled(Block)`
  background: linear-gradient(to right, #5104fe, #946efd);
  border-radius: 1rem;
  padding: 5rem 1rem;
  row-gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const H1 = styled.h1`
  font-size: 4rem;
  @media screen and (max-width: 700px) {
    font-size: 3rem;
  }
`
const H2 = styled.h2`
  font-size: 3rem;
`
const H3 = styled.h2`
  font-size: 1.5rem;
`
const P = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  opacity: 0.7;
`

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 0.2rem #ffffff1f;
`
const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin: 0 0.5rem;
  & a {
    color: #ffffff87;
    text-decoration: none;
    :hover {
      color: inherit;
    }
  }
`

const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 3px;
  background-color: #00a6ff;
  color: white;
`

const Main = styled.main`
  margin-top: 10rem;
`
const ButtonPrimary = styled(Button)`
  border-radius: 0.5rem;
  padding: 1.1rem 2.3rem;
  align-self: start;
  box-shadow: 0.1rem 0.2rem 0.2rem #464ffa;
`
const ButtonSecondary = styled(ButtonPrimary)`
  align-self: auto;
`
const Logo = styled.img`
  cursor: pointer;
  max-height: 2rem;
  max-width: 2rem;
`

const Footer = styled.footer``

const IndexPage: React.FC<PageProps> = () => {
  const { header, banner, section1, section2, section3, section4, section5 } =
    content as HomePage
  return (
    <PageContainer>
      <Header>
        <Logo src={header.logo} alt="attech" />
        <Navigation>
          <a href="/">{header.nav.item1}</a>
          <a href="/">{header.nav.item2}</a>
          <a href="/">{header.nav.item3}</a>
        </Navigation>
        <Button>{header.button}</Button>
      </Header>

      <Main>
        <Section>
          <Block>
            <H1>{banner.title}</H1>
            <P>{banner.description}</P>
            <ButtonPrimary>{banner.button}</ButtonPrimary>
          </Block>
          <Block>
            <img src={banner.image} alt={banner.title} />
          </Block>
        </Section>

        <Section>
          <Block>
            <H2>{section1.title}</H2>
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
            <H2>{section2.title}</H2>
            <P>{section2.description}</P>
          </Block>
        </Section>
        <Section>
          <Block>
            <H2>{section3.title}</H2>
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
            <H2>{section4.title}</H2>
            <P>{section4.description}</P>
          </Block>
        </Section>

        <Section>
          <GetStartedBlock>
            <H1>{section5.title}</H1>
            <ButtonSecondary>{section5.button}</ButtonSecondary>
          </GetStartedBlock>
        </Section>
      </Main>
      <Footer />
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>attech.agency</title>
