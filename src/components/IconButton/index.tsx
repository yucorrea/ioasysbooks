import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../config/theme';

import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  onPress(): void;
  icon: string;
}

export function IconButton({ onPress, icon, ...rest }: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <Icon name={icon} size={16} color={theme.colors.title} />
    </Container>
  );
}
