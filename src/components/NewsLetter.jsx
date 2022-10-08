import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  height: 40px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates on new products and special offers.</Description>
      <InputContainer>
        <Input placeholder='Your email'></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
