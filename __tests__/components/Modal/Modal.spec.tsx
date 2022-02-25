import React from 'react';
import { View, Text } from 'react-native';

import Modal from '@components/Modal';

import { matchSnapshotWithTheme, renderWithTheme } from '@helpers/functions/testing';

const Children = () => {
  return (
    <View testID='children-component'>
      <Text>Modal</Text>
    </View>
  );
};

describe('Modal Component', () => {
  it('matches snapshots', () => {
    const mockFunction = jest.fn();
    const snap = matchSnapshotWithTheme(
      <Modal show close={mockFunction}>
        <Children />
      </Modal>,
    );
    expect(snap).toMatchSnapshot();
  });

  it('render correctly', () => {
    const mockFunction = jest.fn();
    renderWithTheme(
      <Modal show close={mockFunction}>
        <Children />
      </Modal>,
    );
  });


  it('check if contain children in modal ', () => {
    const mockFunction = jest.fn();
    const { getByText } = renderWithTheme(
      <Modal  show close={mockFunction}>
        <Children />
      </Modal>,
    );

    expect(getByText('Modal')).toBeTruthy();
  });

  it('when pass props falsy modal hide', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Modal testID="modal-component" show={false} close={mockFunction}>
        <Children />
      </Modal>,
    );

    const modal = getByTestId("modal-component");
    expect(modal.props.visible).toBeFalsy();
  });
});
