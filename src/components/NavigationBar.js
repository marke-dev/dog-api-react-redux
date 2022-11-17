import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background-color: #333;
  top: 0;
  left: 0;
  position: sticky;

  * {
    float: left;
  }
  a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;

const Title = styled(Link)`
  color: white;
  font-weight: bold;
`;

const BarLink = styled(Link)`
  :hover {
    background-color: #ddd;
    color: black;
  }
`;
const NavigationBar = () => {
  return (
    <Container>
      <Title className="noselect" to="/">
        Dogs
      </Title>
      <BarLink className="noselect" to="/">
        Breeds
      </BarLink>
    </Container>
  );
};

export default NavigationBar;
