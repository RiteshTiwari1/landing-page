import React, { useState } from 'react';
import styled from 'styled-components';
import motorcycleImage from '../assets/images/motorcyle.png';
import instantQuoteImage from '../assets/images/instant-image-quote.png';
import inspectionImage from '../assets/images/inspection.png';
import ownershipImage from '../assets/images/ownership.png';

const HeroSection = styled.section`
  display: flex;
  padding: 3rem 5%;
  background-color: #f8f9fa;
  min-height: 500px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 5%;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
  padding-left: 9rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 4rem;
  
  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// const FeatureIcon = styled.div`
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

const FeatureText = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const PhoneInput = styled.input`
  padding: 1rem;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  outline: none;
  width: 100%;
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #222;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
`;

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Phone number submitted:', phoneNumber);
    alert('Thank you! We will get back to you soon.');
    setPhoneNumber('');
  };
  
  return (
    <HeroSection>
      <LeftContent>
        <HeroTitle>Want to sell your bike?</HeroTitle>
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>
              <img src={instantQuoteImage} alt="Instant Online Quote" />
            </FeatureIcon>
            <FeatureText>Instant Online Quote</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>
              <img src={inspectionImage} alt="Hassle-Free Inspection" />
            </FeatureIcon>
            <FeatureText>Hassle-Free Inspection</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>
              <img src={ownershipImage} alt="Seamless Ownership Transfer" />
            </FeatureIcon>
            <FeatureText>Seamless Ownership Transfer</FeatureText>
          </FeatureItem>
        </FeatureList>
        <LeadForm onSubmit={handleSubmit}>
          <PhoneInput 
            type="tel" 
            placeholder="Enter your phone number" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <SubmitButton type="submit">Get the best quote for you</SubmitButton>
        </LeadForm>
      </LeftContent>
      <RightContent>
        <HeroImage>
          <img src={motorcycleImage} alt="Motorcycle" />
        </HeroImage>
      </RightContent>
    </HeroSection>
  );
};

export default Hero; 