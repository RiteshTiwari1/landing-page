import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FAQAnswer = styled.div`
  padding: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: opacity 0.3s ease;
`;

const faqData = [
  {
    id: 1,
    question: "How does Zuto procure bikes?",
    answer: "Zuto procures bikes directly from sellers like you. We have a team of experts who evaluate the condition of your bike and offer a fair market price. Once you accept our offer, we handle all the paperwork and transfer process."
  },
  {
    id: 2,
    question: "Are all your bikes Zuto certified?",
    answer: "Yes, all bikes sold through Zuto undergo a rigorous certification process. Our 150+ point inspection ensures that every bike is in excellent condition before it's listed for sale."
  },
  {
    id: 3,
    question: "Does Zuto buy bikes that are registered outside Karnataka?",
    answer: "Yes, Zuto buys bikes registered in any state across India. However, there might be additional documentation required for out-of-state registrations."
  },
  {
    id: 4,
    question: "Is the pricing of the bikes negotiable?",
    answer: "Our pricing is based on a comprehensive market analysis and the condition of your bike. While we offer the best market rates, there might be some room for negotiation depending on various factors."
  },
  {
    id: 5,
    question: "Does Zuto offer trade-in options for customers looking to exchange their current motorcycles?",
    answer: "Yes, Zuto offers trade-in options. You can exchange your current motorcycle and pay the difference for a new one from our collection."
  },
  {
    id: 6,
    question: "What financing or payment plans does Zuto offer for purchasing motorcycles?",
    answer: "Zuto partners with leading financial institutions to offer flexible financing options. We can provide loans with competitive interest rates and customizable repayment plans to suit your budget."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section>
      <SectionTitle>FAQs</SectionTitle>
      
      <FAQContainer>
        {faqData.map((faq, index) => (
          <FAQItem key={faq.id}>
            <FAQQuestion 
              onClick={() => toggleFAQ(index)}
              isOpen={openIndex === index}
            >
              {faq.question}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </FAQQuestion>
            <FAQAnswer isOpen={openIndex === index}>
              {faq.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQContainer>
    </Section>
  );
};

export default FAQ; 