import React from 'react';
import { matchSnapshotWithTheme, renderWithTheme } from '@helpers/functions/testing';

import BookDetail from '@screens/BookDetail';

describe('BookDetail Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<BookDetail />);
  });

  test('renders correctly', () => {
    renderWithTheme(<BookDetail />);
  });
});
