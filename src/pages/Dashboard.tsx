import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCards from '../components/DashboardCards';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import BackgroundAnimation from '../components/BackgroundAnimation';
import styled from 'styled-components';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <DashboardCards />
        <ChartsContainer>
          <ResponsiveChartWrapper>
            <LineChart />
          </ResponsiveChartWrapper>
          <ResponsiveChartWrapper>
            <BarChart />
          </ResponsiveChartWrapper>
          <ResponsiveChartWrapper>
            <PieChart />
          </ResponsiveChartWrapper>
        </ChartsContainer>
      </MainContent>
      <BackgroundAnimation />
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const ResponsiveChartWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  height: 300px;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;
