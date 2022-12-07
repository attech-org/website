import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'

//

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
`
const H1 = styled.h1`
  font-size: 3rem;
`
const H2 = styled.h2`
  font-size: 2rem;
`
const H3 = styled.h2`
  font-size: 1.5rem;
`
const P = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`
//
// const Wrapper = styled.main`
//   max-width: 1200px;
//   margin: auto;
//   height: 150vh;
// `
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 10px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 3px #ffffff1f;
`
const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 30px;
  margin-left: 10px;
  margin-right: 10px;
  & a {
    color: #ffffff87;
    text-decoration: none;
    :hover {
      color: inherit;
    }
  }
`

const Button = styled.button`
  font-weight: bold;
  white-space: nowrap;
  padding: 15px 25px;
  border: none;
  border-radius: 3px;
  background-color: #00a6ff;
  color: white;
`

const Main = styled.main`
  margin-top: 150px;
  padding: 10px;
`
const Banner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ButtonSecondary = styled(Button)`
  border-radius: 5px;
  padding: 15px 30px;
`
const Footer = styled.footer``

const headerLinks = ['What u get', 'How it works', 'Customer stories']

const IndexPage: React.FC<PageProps> = () => {
  const { docTitle, section1, section2, section3, section4 } =
    content as HomePage
  return (
    <PageContainer>
      <Header>
        <span>Attech</span>
        <Navigation>
          {headerLinks.map((link) => (
            <a href="/">{link}</a>
          ))}
        </Navigation>
        <Button>Contact us</Button>
      </Header>

      <Main>
        <Banner>
          <div>
            <H1>Track ur cash flow in real time</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellat esse veritatis voluptate incidunt quis
              nesciunt saepe nemo vel reiciendis. Repudiandae, doloribus nihil
              veniam exercitationem perspiciatis itaque inventore quo vitae?
            </P>
            <ButtonSecondary>Contact us</ButtonSecondary>
          </div>
          <div>
            <StaticImage src="../images/icon.png" alt="gatsby" />
          </div>
        </Banner>
        {/* <h1>
          {docTitle}
          <span>— {header.navigation.item2}! 🎉🎉🎉</span>
        </h1> */}
      </Main>

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

      <Footer />
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>attech.agency</title>
