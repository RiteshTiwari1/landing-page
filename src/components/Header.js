import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #c13a3a;
`;

const SearchBar = styled.div`
  position: relative;
  width: 40%;
  max-width: 500px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  font-size: 0.9rem;
  outline: none;
  
  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#c13a3a' : '#333'};
  transition: color 0.3s ease;
  
  &:hover {
    color: #c13a3a;
  }
  
  @media (max-width: 768px) {
    display: ${props => props.hideOnMobile ? 'none' : 'block'};
  }
`;

const LocationSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const PhoneNumber = styled.div`
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Vutto</Logo>
      <SearchBar>
        <SearchIcon>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SearchIcon>
        <SearchInput placeholder="Search by brand or model" />
      </SearchBar>
      <Navigation>
        <NavLink href="#" active>Buy</NavLink>
        <NavLink href="#">Sell</NavLink>
        <NavLink href="#" hideOnMobile>Shortlists</NavLink>
        <NavLink href="#" hideOnMobile>Profile</NavLink>
        <LocationSelector>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Bangalore
        </LocationSelector>
        <PhoneNumber>+91 9736423546</PhoneNumber>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header; 