import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 5%;
  background-color: #f8f9fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${props => props.primary ? '#333' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#333'};
  border: 1px solid #333;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    background-color: ${props => props.primary ? '#222' : '#f5f5f5'};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Contact = () => {
  return (
    <Section>
      <SectionTitle>Need more help?</SectionTitle>
      
      <ContactContainer>
        <ContactButton href="mailto:support@vutto.com" primary>
          Mail us
        </ContactButton>
        
        <ContactButton href="https://wa.me/919736423546" primary>
          Talk to us on Whatsapp
        </ContactButton>
      </ContactContainer>
    </Section>
  );
};

export default Contact; 