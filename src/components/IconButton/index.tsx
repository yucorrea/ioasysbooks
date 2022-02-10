import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  onPress(): void;
  icon: string;
}

export function IconButton({ onPress, icon, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container {...rest} onPress={onPress}>
      <Icon name={icon} size={16} color={colors.title} />
    </Container>
  );
}
