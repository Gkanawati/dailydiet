import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Props } from '.';

export const Container = styled.SafeAreaView<Props>`
  background-color: ${({ theme, status }) =>
    status === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 24px 44px 24px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  align-self: flex-start;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, status }) => ({
  size: 28,
  color:
    status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const TitleHeader = styled.Text`
  margin-top: -24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitleHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
