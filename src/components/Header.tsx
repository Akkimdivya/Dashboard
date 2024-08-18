import React from 'react';
import styled from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';
import FadeIn from './Animations/FadeIn';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <FadeIn>
      <HeaderContainer>
        <h1>Advanced Dashboard</h1>
        <ThemeSwitcher toggleTheme={toggleTheme} />
      </HeaderContainer>
    </FadeIn>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    h1 {
      margin-bottom: 10px;
    }

    padding: 15px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2em;
    }

    padding: 10px;
  }
`;
