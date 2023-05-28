import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList id="contacts">
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+923095340327">0309-5340327</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shamembibi@gmail.com">
            shamembibi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a time</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://www.facebook.com/saima.gull.35380399"
            target="_blank"
          >
            <AiOutlineFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="tel:+923095340327">
            <AiFillPhone size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/923095340327" target="_blank">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:shamembibi@gmail.com">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
