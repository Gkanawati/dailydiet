import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 24px 34px 24px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  align-self: flex-start;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.GRAY_600,
}))``;

export const TitleHeader = styled.Text`
  margin-top: -24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
