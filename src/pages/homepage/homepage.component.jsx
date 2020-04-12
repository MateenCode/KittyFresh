import React from "react";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer, Banner } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Banner
      src='https://i.imgur.com/6NzHfHR.gif'
      alt='banner'
      href='http://localhost:3000/shop/womens'
    />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
