import React from 'react';
import styled from 'styled-components';
import instantQuoteImg from '../assets/images/instant-quote.png';
import evaluationImg from '../assets/images/evaluation.png';
import paidInstantlyImg from '../assets/images/paid-instantly.png';

const Section = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #c13a3a;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const HowItWorks = () => {
  return (
    <Section>
      <SectionTitle>How it works</SectionTitle>
      <SectionSubtitle>Own Your Motorcycle in 3 Simple Steps</SectionSubtitle>
      
      <StepsContainer>
        <Step>
          <StepIcon>
            <img src={instantQuoteImg} alt="Instant quote" />
          </StepIcon>
          <StepTitle>Instant quote</StepTitle>
          <StepDescription>Browse our curated collection</StepDescription>
        </Step>
        
        <Step>
          <StepIcon>
            <img src={evaluationImg} alt="Free doorstep evaluation" />
          </StepIcon>
          <StepTitle>Free doorstep evaluation</StepTitle>
          <StepDescription>Explore our store inventory at your convenience</StepDescription>
        </Step>
        
        <Step>
          <StepIcon>
            <img src={paidInstantlyImg} alt="Get paid instantly" />
          </StepIcon>
          <StepTitle>Get paid instantly</StepTitle>
          <StepDescription>Hassle-free purchase and ownership transfer</StepDescription>
        </Step>
      </StepsContainer>
    </Section>
  );
};

export default HowItWorks; 