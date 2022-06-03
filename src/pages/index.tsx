import React from 'react';
import Layout from '@/components/Layout';
import SectionWithPhotoFirst from '@/components/SectionWithPhotoFirst';
import SectionWithPhotoSecond from '@/components/SectionWithPhotoSecond';
import SectionWithPhotoThird from '@/components/SectionWithPhotoThird';
import SectionMenu from '@/components/SectionMenu';
import SectionParagraph from '@/components/SectionParagraph';
import SectionWithPhotoFourth from '@/components/SectionWithPhotoFourth';
import SectionFeatures from '@/components/SectionFeatures';
import SectionHeroSecond from '@/components/SectionHeroSecond';
import SectionHeroFirst from '@/components/SectionHeroFirst';

const Home: React.FunctionComponent = () => (
  <Layout>
    <SectionHeroFirst />
    <SectionWithPhotoFirst />
    <SectionWithPhotoSecond />
    <SectionWithPhotoThird />
    <SectionMenu />
    <SectionParagraph />
    <SectionWithPhotoFourth />
    <SectionFeatures />
    <SectionHeroSecond />
  </Layout>
);
export default Home;
