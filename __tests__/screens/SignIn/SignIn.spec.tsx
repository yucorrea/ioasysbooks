import React from 'react';
import { matchSnapshotWithTheme, renderWithTheme } from '../../../src/helpers/functions/testing';

import SignIn from '../../../src/screens/SignIn';

describe('SignIn Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<SignIn />);
  });

  test('renders correctly', () => {
    renderWithTheme(<SignIn />);
  });
});
