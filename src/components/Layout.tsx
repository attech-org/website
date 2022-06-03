import React from 'react';
import styled from 'styled-components';
import '../assets/styles/reset.css';
import '../assets/styles/main.css';

const Main = styled.main`
  background-color: #fff;
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <Main>{children}</Main>
);

export default Layout;
