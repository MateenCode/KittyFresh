import React from "react";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer, Banner } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Banner
      src='https://images.contentful.com/q602vtcuu3w3/4SjR5pqQAcBPE4HWejWlB2/fbea941a3ee4cefce8dfd1e3a83f7a7b/40OFF_WAPP_WACC_WINT7.jpg?q=80&w=2160&fm=webp'
      alt='banner'
      href='http://localhost:3000/shop/womens'
    />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
