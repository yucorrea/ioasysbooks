import React, { useState, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';
import { IconButton } from '../IconButton';

import { ModalContainer, ModalContent, Header } from './styles';

interface Props {
  show: Boolean;
  close: () => void;
  children: React.ReactNode;
}

export function Modal({ show, close, children }: Props) {
  const [opacity] = useState(new Animated.Value(0));

  const openModal = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const closeModal = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  useEffect(() => {
    show ? openModal() : closeModal();
  }, [show, openModal, closeModal]);

  return (
    <ModalContainer style={{ opacity: opacity }}>
      {show && (
        <ModalContent>
          <Header>
            <IconButton onPress={close} icon="close-outline" />
          </Header>

          {children}
        </ModalContent>
      )}
    </ModalContainer>
  );
}
