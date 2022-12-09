/* eslint-disable */
/* tslint:disable */

export interface HomePage_header_nav {
  item1: string;
  item2: string;
  item3: string;
}

export interface HomePage_header {
  logo: string;
  nav: HomePage_header_nav;
  button: string;
}

export interface HomePage_banner {
  title: string;
  description: string;
  button: string;
  image: string;
}

export interface HomePage_section1 {
  title: string;
  description: string;
  image: string;
}

export interface HomePage_section2 {
  title: string;
  description: string;
  image: string;
}

export interface HomePage_section3 {
  title: string;
  description: string;
  image: string;
}

export interface HomePage_section4 {
  title: string;
  description: string;
  image: string;
}

export interface HomePage {
  docTitle: string;
  header: HomePage_header;
  banner: HomePage_banner;
  section1: HomePage_section1;
  section2: HomePage_section2;
  section3: HomePage_section3;
  section4: HomePage_section4;
}
