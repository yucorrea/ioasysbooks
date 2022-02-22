import React from 'react';
import renderer from 'react-test-renderer';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../config/theme';

export const matchSnapshotWithTheme = (component :  React.ReactElement) => {
  const tree = renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
};

export const renderWithTheme = (component : React.ReactElement, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}> {component} </ThemeProvider>, options);
};
