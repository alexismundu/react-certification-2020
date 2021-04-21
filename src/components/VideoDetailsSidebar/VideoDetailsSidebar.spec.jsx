import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import VideoDetailsSidebar from './VideoDetailsSidebar.component';
import mockData from '../../test-mock-data';

describe('VideoDetailsSidebar', () => {
  it('should render all items in the mock data', () => {
    const { getByText, getAllByRole } = render(
      <Router>
        <VideoDetailsSidebar list={mockData} />
      </Router>
    );
    expect(getByText('Video Tour | Welcome to Wizeline Guadalajara')).toBeInTheDocument();
    expect(getAllByRole('link').length).toBe(mockData.items.length);
    expect(getAllByRole('img').length).toBe(mockData.items.length);
  });
});
