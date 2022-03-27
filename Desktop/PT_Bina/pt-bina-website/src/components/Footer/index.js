import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                   <FooterLinkItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/about">How it works</FooterLink>
                           <FooterLink to="/about">Testimonials</FooterLink>
                           <FooterLink to="/about">Careers</FooterLink>
                           <FooterLink to="/about">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                       <FooterLinkTitle>Social Media</FooterLinkTitle>
                           <FooterLink to="/about">Instagram</FooterLink>
                           <FooterLink to="/about">Twitter</FooterLink>
                    </FooterLinkItems>  
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer