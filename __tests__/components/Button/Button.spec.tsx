import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import Button from './../../../src/components/Button';
import {
  matchSnapshotWithTheme,
  renderWithTheme,
} from '../../../src/helpers/functions/testing';

describe('Buttom Component', () => {

  it('matches snapshots', () => {
    const snap = matchSnapshotWithTheme(<Button title="Click-me" />);
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Button onPress={mockFunction} testID="button-id" title="Click-me" />,
    );
    const button = getByTestId('button-id');
    fireEvent.press(button);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('render button loading if props has true', () => {
     renderWithTheme( <Button onPress={jest.fn} title="Click-me" loading /> );
  });
});
