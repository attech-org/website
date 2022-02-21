import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6.8rem 8rem;
  @media (max-width: 1200px) {
    padding: 4.25rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  min-height: 563px;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: 1200px) {
    position: static;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfilePhoto = styled.div`
  width: 380px;
  height: 380px;
  background-image: url(https://via.placeholder.com/380/000000/FFFFFF?text=Photo+Profile);
  border-right: solid 1rem #fff;
  border-bottom: solid 1rem #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  @media (max-width: 1200px) {
    position: static;
    border: none;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const PhotoGallery = styled.div`
  width: 70%;
  height: 495px;
  background-image: url(https://via.placeholder.com/900x495/F6EDE8?text=Photo+Gallery);
  z-index: 1;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    height: 325px;
  }
`;

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 2rem;
  text-align: right;
  @media (max-width: 768px) {
    margin-right: 2rem;
  }
`;

const SectionWithPhotoThird: React.FunctionComponent = () => (
  <Container>
    <ContentWrapper>
      <ProfilePhoto />
      <PhotoGallery />
    </ContentWrapper>
    <Text>attech-org hero illustration</Text>
  </Container>
);

export default SectionWithPhotoThird;
