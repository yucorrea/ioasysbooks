import React from 'react';
import { matchSnapshotWithTheme, renderWithTheme } from '../../../src/helpers/functions/testing';

import BookDetail from '../../../src/screens/BookDetail';

describe('BookDetail Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<BookDetail />);
  });

  test('renders correctly', () => {
    renderWithTheme(<BookDetail />);
  });
});
