import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  fonr-weight: bold;
  justify-content: center;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on all orders over $50</Container>;
};

export default Announcement;
