import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const ModalContainer = styled(Animated.View)`
  width: ${width}px;
  height: ${height}px;
  padding: 16px;

  position: absolute;
  z-index: 2;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled(Animated.View)`
  width: 100%;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;
