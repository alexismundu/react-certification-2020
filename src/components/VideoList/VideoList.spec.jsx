import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import VideoList from './VideoList.component';
import mockData from '../../test-mock-data';

describe('VideoList', () => {
  it('should render all items except the first one that is a channel', () => {
    const { getByText } = render(
      <Router>
        <VideoList list={mockData} />
      </Router>
    );
    expect(getByText('Video Tour | Welcome to Wizeline Guadalajara')).toBeInTheDocument();
    expect(
      getByText('Wizeline Guadalajara | Bringing Silicon Valley to Mexico')
    ).toBeInTheDocument();
    expect(
      getByText('Wizeline hace sentir a empleados como en casa')
    ).toBeInTheDocument();
  });

  it('should render the images in the mocked data', () => {
    const { getByAltText } = render(
      <Router>
        <VideoList list={mockData} />
      </Router>
    );
    expect(
      getByAltText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeInTheDocument();
    expect(
      getByAltText('Wizeline Guadalajara | Bringing Silicon Valley to Mexico')
    ).toBeInTheDocument();
    expect(
      getByAltText('Wizeline hace sentir a empleados como en casa')
    ).toBeInTheDocument();
  });
});
