import React from 'react';
import styled from 'styled-components';
import ZoomIn from './Animations/ZoomIn';

const DashboardCards: React.FC = () => {
  return (
    <CardsContainer>
      <ZoomIn>
        <Card>
          <h3>Card Title 1</h3>
          <p>Some interesting data here.</p>
        </Card>
      </ZoomIn>
      <ZoomIn>
        <Card>
          <h3>Card Title 2</h3>
          <p>More interesting data here.</p>
        </Card>
      </ZoomIn>
      <ZoomIn>
        <Card>
          <h3>Card Title 3</h3>
          <p>Even more interesting data here.</p>
        </Card>
      </ZoomIn>
    </CardsContainer>
  );
};

export default DashboardCards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 98%;
`;
