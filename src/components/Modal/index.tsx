import React, { memo } from 'react';
import { Modal, Dimensions, ModalProps } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

import  IconButton  from '@components/IconButton';
interface Props extends ModalProps {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
}

const ModalComponent : React.FC<Props> =  ({ show, close, children, ...rest }) => {

  return (
    <Modal visible={show} onRequestClose={close} animationType="fade" transparent {...rest}>
      <StyledModalContainer>
        <StyledModalContent>
          <StyledHeader>
            <IconButton testID="button-modal-close" onPress={close} icon="close-outline" />
          </StyledHeader>
          {children}
        </StyledModalContent>
      </StyledModalContainer>
    </Modal>
  );
}

const StyledModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.modal_overlay};
`;

const StyledModalContent = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.shape};
`;

const StyledHeader = styled.View`
  align-items: flex-end;
  width: 100%;
`;

export default memo(ModalComponent);
