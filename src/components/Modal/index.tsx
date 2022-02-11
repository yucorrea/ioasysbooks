import React, { useState } from 'react';
import { Animated, Modal } from 'react-native';
import { IconButton } from '../IconButton';

import { ModalContainer, ModalContent, Header } from './styles';

interface Props {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
}

export function ModalComponent({ show, close, children }: Props) {

  return (
    <Modal visible={show} onRequestClose={close} animationType="fade" transparent>
      <ModalContainer>
        <ModalContent>
          <Header>
            <IconButton onPress={close} icon="close-outline" />
          </Header>
          {children}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
