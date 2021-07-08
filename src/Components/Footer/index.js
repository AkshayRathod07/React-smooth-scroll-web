import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterItems,
  FooterTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink
} from "./FooterElement";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterItems>
              <FooterTitle>About us</FooterTitle>
              <FooterLink to="/signin">How Its Work</FooterLink>
              <FooterLink to="/signin">Testomonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterItems>
            <FooterItems>
              <FooterTitle>Videos </FooterTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterItems>
          </FooterLinksWrapper>
          {/* 2 row */}
          <FooterLinksWrapper>
            <FooterItems>
              <FooterTitle>Contact us</FooterTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
            </FooterItems>
            <FooterItems>
              <FooterTitle>Social Media</FooterTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterItems>
          </FooterLinksWrapper>
          
        </FooterLinksContainer>
        
      
      </FooterWrap>
      <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              Doller
            </SocialLogo>
            <WebsiteRight> Doller ©  {new Date().getFullYear()} All rights reserved. </WebsiteRight>
            <SocialIcons>
              <SocialIconLink
                href="/https://www.instagram.com/akshay_rathod_14/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/https://www.instagram.com/akshay_rathod_14/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/https://www.instagram.com/akshay_rathod_14/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/https://www.instagram.com/akshay_rathod_14/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
