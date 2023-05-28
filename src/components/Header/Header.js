import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Shamem Bibi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Solutioins</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Videos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Kala Jadu</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contacts">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/saima.gull.35380399">
        <AiOutlineFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="tel:+923095340327">
        <AiFillPhone size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://wa.me/923095340327">
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:shamembibi@gmail.com.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
