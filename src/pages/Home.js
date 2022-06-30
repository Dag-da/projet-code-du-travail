import React from "react";
import styled from "styled-components";
import Featured from "../components/home/featured/Featured";
import Welcome from "../components/home/search/Welcome";
import Theme from "../components/home/theme/Theme";
import ToolBox from "../components/home/toolbox/ToolBox";
import MoreInfo from "../components/MoreInfo";

export default function Home() {
  return (
    <HomePage>
      <Welcome />
      <Featured />
      <Theme />
      <ToolBox />
      <MoreInfo />
    </HomePage>
  );
}
const HomePage = styled.main`
  font-family: "Merriweather", serif;
  color: #3e486e;
  background: linear-gradient(#d0defd, #fff 7%);
`;
