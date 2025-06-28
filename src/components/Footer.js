import React from 'react';
import styled from 'styled-components';
import footerImage from '../assets/images/footer.png';

const FooterContainer = styled.footer`
  padding: 4rem 5% 2rem;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const WhyChooseSection = styled(FooterSection)`
  flex: 2;
`;

const WhyChooseText = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: #0066cc;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterLink = styled.a`
  color: #666;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333;
  }
`;

const SocialContainer = styled.div`
  margin-top: 3rem;
`;

const SocialTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  color: #333;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0066cc;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Copyright = styled.div`
  text-align: left;
  border-top: 1px solid #e0e0e0;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 1rem;
`;

const CopyrightText = styled.div`
  margin-bottom: 1rem;
`;

const BottomImage = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  
  img {
    max-width: 500px;
    height: auto;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <WhyChooseSection>
          <SectionTitle>Why choose Zuto?</SectionTitle>
          <WhyChooseText>
            Lorem ipsum dolor sit amet consectetur. Bibendum sed auctor elementum fringilla eget rhoncus. Aenean eget nunc gravida sit nibh habitant tincidunt nunc in. Dui odio molestie odio ut nec volutpat aliquam rhoncus enim.
          </WhyChooseText>
          <ShowMoreButton>Show more</ShowMoreButton>
        </WhyChooseSection>
        
        <FooterSection>
          <SectionTitle>Services</SectionTitle>
          <LinkList>
            <LinkItem><FooterLink href="#">Buy used bikes</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Sell your bike</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Get instant quote</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Apply for loan</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Evaluate your bike</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Talk to expert</FooterLink></LinkItem>
          </LinkList>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>Zuto</SectionTitle>
          <LinkList>
            <LinkItem><FooterLink href="#">About Zuto</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Blogs</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Privacy policy</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Careers</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Admin panel</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Terms of service</FooterLink></LinkItem>
          </LinkList>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>Popular searches</SectionTitle>
          <LinkList>
            <LinkItem><FooterLink href="#">Sell used bike</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Zuto used bikes</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Cheap bikes in Bangalore</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Suzuki</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Hero</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Bajaj</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Honda</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Royal Enfield</FooterLink></LinkItem>
          </LinkList>
        </FooterSection>
      </FooterContent>
      
      <SocialContainer>
        <SocialTitle>Connect with us</SocialTitle>
        <SocialIcons>
          <SocialIcon href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Pinterest">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </SocialIcon>
        </SocialIcons>
      </SocialContainer>
      
      <Copyright>
        <CopyrightText>©2024 Zuto</CopyrightText>
        <BottomImage>
          <img src={footerImage} alt="Motorcycle illustration" />
        </BottomImage>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 