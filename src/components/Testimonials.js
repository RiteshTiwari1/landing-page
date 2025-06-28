import React, { useState } from 'react';
import styled from 'styled-components';
import johnImage from '../assets/images/john.png';

const Section = styled.section`
  padding: 4rem 5%;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible;
`;

const TestimonialSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.activeIndex * 100}%);
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Testimonial = styled.div`
  flex: 0 0 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const TestimonialImage = styled.div`
  flex: 0 0 40%;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 2rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
    height: 200px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TestimonialInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  right: -20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 10;
`;

const NavButton = styled.button`
  background-color: #f8f9fa;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #e9ecef;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#333' : '#ccc'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const testimonials = [
  {
    id: 1,
    quote: "I didn't think selling my bike was so easy, Zuto helped me from figuring out a quote to the final inspection. They even picked up the bike from my location",
    author: "John Doe",
    info: "2017 Hero Karizma",
    image: johnImage
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <Section>
      <SectionTitle>Stories we love</SectionTitle>
      
      <TestimonialsContainer>
        <TestimonialSlider activeIndex={activeIndex}>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id}>
              <TestimonialImage>
                <img src={testimonial.image} alt={`Testimonial from ${testimonial.author}`} />
              </TestimonialImage>
              <TestimonialContent>
                <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
                <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                <TestimonialInfo>{testimonial.info}</TestimonialInfo>
              </TestimonialContent>
            </Testimonial>
          ))}
        </TestimonialSlider>
        
        <NavigationButtons>
          <NavButton onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
          <NavButton onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
        </NavigationButtons>
        
        <Indicators>
          {testimonials.map((_, index) => (
            <Indicator 
              key={index} 
              active={index === activeIndex} 
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Indicators>
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials; 