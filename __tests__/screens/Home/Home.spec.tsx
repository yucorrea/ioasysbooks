import React from 'react';
import { matchSnapshotWithTheme, renderWithTheme } from '../../../src/helpers/functions/testing';

import Home from '../../../src/screens/Home';

describe('Home Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<Home />);
  });

  test('renders correctly', () => {
    renderWithTheme(<Home />);
  });
});
