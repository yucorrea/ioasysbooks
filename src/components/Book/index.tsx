import React, { memo } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { LightSpeedInLeft } from 'react-native-reanimated';
import { Book as BookData } from '@routes/AppStack';


const AnimatedStyledContainer = Animated.createAnimatedComponent(TouchableOpacity);
interface Props extends TouchableOpacityProps {
  data: BookData;
  onPress: () => void
}

const Book : React.FC<Props> = ({ data, onPress, ...rest })  => {

  return (
    <StyledContainer
      entering={LightSpeedInLeft}
      onPress={onPress}
      {...rest}>
      <StyledImage source={{ uri: data.imageUrl }} />
      <StyledWrapper>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledSubTitle>{data.authors[0]}</StyledSubTitle>

        <StyledFooter>
          <StyledDetail>{data.pageCount} páginas</StyledDetail>
          <StyledDetail>Editora {data.publisher}</StyledDetail>
          <StyledDetail>Publicado em {data.published}</StyledDetail>
        </StyledFooter>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(AnimatedStyledContainer)`
  flex-direction: row;
  width: 100%;
  height: 160px;
  margin: 16px 0px;
  padding: 19px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.shape};
`;

const StyledImage = styled.Image`
  width: 81px;
  height: 112px;
  margin-right: 16px;
`;

const StyledWrapper = styled.View``;

const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

const StyledSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const StyledFooter = styled.View`
  margin-top: 25px;
`;

const StyledDetail = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export default memo(Book, (prevState, nextState) => {
  return Object.is(prevState.data, nextState.data);
}) ;
