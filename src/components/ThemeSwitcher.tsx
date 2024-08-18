import React from 'react';
import styled from 'styled-components';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default ThemeSwitcher;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
