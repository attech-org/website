import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.8rem 11rem;
  @media (max-width: 1200px) {
    padding: 4.25rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;

const Title = styled.p`
  font-size: 3.75rem;
  line-height: 4rem;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 2.6rem;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
    font-weight: 700;
  }
`;

const Desc = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SectionWithPhotoFirst: React.FunctionComponent = () => (
  <Container>
    <Title>Agile and Lean Principles: How to build startups faster</Title>
    <Desc>
      These days, starting a new venture is an extremely challenging process.
    </Desc>
  </Container>
);

export default SectionWithPhotoFirst;
