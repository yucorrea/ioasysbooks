import React from 'react';
import { matchSnapshotWithTheme, renderWithTheme } from '@helpers/functions/testing';

import SignIn from '@screens/SignIn';

describe('SignIn Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<SignIn />);
  });

  test('renders correctly', () => {
    renderWithTheme(<SignIn />);
  });
});
