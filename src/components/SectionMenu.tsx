import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6.8rem 4.25rem;
  @media (max-width: 1200px) {
    padding: 4.25rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-top: 13px;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 575px) {
    width: 75%;
    flex-direction: column;
    padding-top: 0;
    align-items: center;
  }
`;

const Li = styled.li`
  font-weight: 700;
  margin-right: 2.6rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 575px) {
    width: 100%;
    border-bottom: solid 1px #e9e9e9;
    padding-bottom: 1rem;
    margin: 0 0 1rem;
    text-align: center;
    &:last-child {
      border: none;
    }
  }
`;

const Logo = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 575px) {
    margin-bottom: 2.25rem;
  }
`;

const SectionMenu: React.FunctionComponent = () => (
  <Container>
    <Nav>
      <Link to="/" className="styledLink">
        <Logo>attech-org</Logo>
      </Link>
      <Ul>
        <Li>
          <Link to="/" className="styledLink">
            Services
          </Link>
        </Li>
        <Li>
          <Link to="/" className="styledLink">
            Portfolio
          </Link>
        </Li>
        <Li>
          <Link to="/" className="styledLink">
            Team
          </Link>
        </Li>
        <Li>
          <Link to="/" className="styledLink">
            Blog
          </Link>
        </Li>
        <Li>
          <Link to="/" className="styledLink">
            Contact
          </Link>
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default SectionMenu;
