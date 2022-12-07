import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// import content from '../../content/pages/home.yml'
// import { HomePage } from '../cms'
import styled from 'styled-components'

import '../styles/reset.css'
import '../styles/global.css'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.main`
  max-width: 1200px;
  margin: auto;
  height: 150vh;
`
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
  // const { docTitle, header } = content as HomePage
  return (
    <Wrapper>
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
            <h1>Track ur cash flow in real time</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellat esse veritatis voluptate incidunt quis
              nesciunt saepe nemo vel reiciendis. Repudiandae, doloribus nihil
              veniam exercitationem perspiciatis itaque inventore quo vitae?
            </p>
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
      <Footer />
    </Wrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
