import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  height: 50px;
  width: 300px;
  object-fit: cover;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pocket Bazar</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ducimus explicabo .</Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFul Links</Title>
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Use</ListItem>
          <ListItem>Return Policy</ListItem>
          <ListItem>Career</ListItem>
          <ListItem>Sitemap</ListItem>
          <ListItem>Affiliate</ListItem>
          <ListItem>Cart</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Asmot-ali patowari Bari,Bondhua, Anandaput, Fulgazi,Feni{" "}
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +8801xxxxxxxxx
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          nushohel2@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/rfk6Q85/images.png' />
      </Right>
    </Container>
  );
};

export default Footer;
