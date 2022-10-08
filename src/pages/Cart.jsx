import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Titel = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "Transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;
  // height: 200px;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const HorizontalLine = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Titel>Your Title</Titel>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shoping Bag (2)</TopText>
            <TopText>Your Wishes</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIN THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>5526586654
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductColor color='black' />
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <HorizontalLine />
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIN THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>5526586654
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductColor color='black' />
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Estemited Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estemited Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 6</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
