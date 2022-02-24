import React, { memo } from 'react';
import { GestureResponderEvent, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button';

interface Props extends TextInputProps {
  label: string;
  enableButton?: boolean;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Input: React.FC<Props> = ({
  label,
  enableButton,
  loading = false,
  onPress,
  ...rest
}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextInput underlineColorAndroid="transparent" {...rest} />
      </StyledWrapper>

      {enableButton && (
        <StyledButtonInput testID='input-button' loading={loading} title="Entrar" onPress={onPress} />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 16px 8px 13px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.input_shape};
`;

const StyledWrapper = styled.View`
  flex: 1;
`;

const StyledLabel = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const StyledTextInput = styled.TextInput.attrs( ({theme })=> ({
  placeholderTextColor: theme.colors.text_light,
}))`
  width: 100%;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const StyledButtonInput = styled(Button)`
  flex: 1;
`;

export default memo(Input);
