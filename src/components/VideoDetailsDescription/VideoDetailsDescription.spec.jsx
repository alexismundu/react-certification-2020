import React from 'react';
import { render } from '@testing-library/react';

import VideoDetailsDescription from './VideoDetailsDescription.component';

describe('VideoDetailsDescription', () => {
  it('should display the title, desription and published date correctly', () => {
    const expectedTitle = 'Test title';
    const expectedDescription = 'Test description';
    const expectedPublishedAt = '2019-04-18T18:48:04Z';
    const { getByText } = render(
      <VideoDetailsDescription
        title={expectedTitle}
        description={expectedDescription}
        publishedAt={expectedPublishedAt}
      />
    );
    expect(getByText(expectedTitle)).toBeInTheDocument();
    expect(getByText(expectedDescription)).toBeInTheDocument();
    expect(getByText('18-Apr-2019')).toBeInTheDocument();
  });
});
