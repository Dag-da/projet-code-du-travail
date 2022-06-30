import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import styled from "styled-components";
import Search from "../SearchBox";
// import { render } from "@testing-library/react";
export default function Navigation() {
  const pages = [
    {
      item: "Accessibilité",
      slug: "/",
      id: 1,
    },
    {
      item: "Theme",
      slug: "/theme",
      id: 2,
    },
    {
      item: "Boîte à outils",
      slug: "/toolbox",
      id: 3,
    },
  ];

  class App extends Component { 
    constructor(props){ 
      super(props) 
          
      // Set initial state 
      this.state = {show : "f"} 
          
      // Binding this keyword 
      this.updateState = this.updateState.bind(this) 
    } 
      
    updateState(){ 
      // Changing state 
      this.setState({show : "show"}) 
    } }

  return (
    <WrapperNavigation>
      <div className="nav-bar">
        <div className="nav-item">
          <img src="3.svg" alt="République française" />
        </div>
        <div className="nav-item code-logo">
          <img src="logo.svg" alt="Code du travail numérique" />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="bar-wrapper">
          <img
            src="bars-solid.svg"
            alt="menu"
            onClick={this.updateState}
            className="bar-logo"
          />
        </div>
      </div>
      <ul className={this.state.show}>
        {pages.map((page) => (
          <NavItems slug={page.slug} key={page.id} page={page.item} />
        ))}
      </ul>
    </WrapperNavigation>
  );
}

const WrapperNavigation = styled.header`
  position: relative;
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 5em;
  box-shadow: 0 0 20px #9298af;
  width: 100%;
  img {
    width: 100%;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .bar-wrapper {
    padding: 1rem;
  }
  .bar-wrapper img {
    color: #9298af;
  }
  svg {
    color: #f00;
    /* width: 10px; */
  }
  .search {
    display: none;
  }
  div {
  }
  img {
    height: 100%;
    max-width: none;
  }
  .show {
    display: none;
  }
`;
