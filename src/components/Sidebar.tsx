import React from 'react';
import styled from 'styled-components';
import SlideIn from './Animations/SlideIn';

const Sidebar: React.FC = () => {
  return (
    <SlideIn>
      <SidebarContainer>
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </nav>
      </SidebarContainer>
    </SlideIn>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh; 

  h2 {
    margin-bottom: 20px;
  }

  ul {
    li {
      margin-bottom: 15px;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;
