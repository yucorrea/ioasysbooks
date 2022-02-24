import React from 'react';
import { fireEvent } from "@testing-library/react-native";

import Input from '../../../src/components/Input';
import {
  matchSnapshotWithTheme,
  renderWithTheme,
} from '../../../src/helpers/functions/testing';

describe('Buttom Component', () => {

  it('matches snapshots', () => {
    const mockFunction = jest.fn();

    const snap = matchSnapshotWithTheme(
        <Input
          placeholder='Seu e-mail'
          label='E-mail'
          onChangeText={mockFunction}
          value='email@email.com'
          enableButton
          onPress={mockFunction}
        />
    );
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    const mockFunction = jest.fn();

    renderWithTheme(
      <Input
        placeholder='Seu e-mail'
        label='E-mail'
        onChangeText={mockFunction}
        value='email@email.com'
      />
    );

  });

  it('value change on input text', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Input
        testID='input-email'
        placeholder='Seu e-mail'
        label='E-mail'
        onChangeText={mockFunction}
      />
    );

    const input = getByTestId('input-email');
    fireEvent.changeText(input, 'email@example.com');
    expect(mockFunction).toHaveBeenCalledWith('email@example.com');
  })

  it('check if contain button in input when has props', () => {
    const mockFunction = jest.fn();
    const { getByText } = renderWithTheme(
      <Input
        testID='input-password'
        placeholder='Senha'
        label='Senha'
        onChangeText={mockFunction}
        onPress={mockFunction}
        enableButton
      />
    );

    const button = getByText('Entrar')
    expect(button).toBeTruthy();
  })

});
