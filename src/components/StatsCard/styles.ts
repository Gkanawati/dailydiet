import { TouchableOpacity } from 'react-native';
import { ArrowUpRight, IconProps } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type FoodStatusProps = 'positive' | 'negative';

type Props = IconProps & {
  status: FoodStatusProps;
};

export const ArrowIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, status }) => ({
    size: 32,
    color:
      status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)`
  align-self: flex-end;
  margin-bottom: -24px;
`;

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 8px;
  margin-top: 32px;
  margin-bottom: 40px;
  border-radius: 8px;
  ${({ theme, status }) => css`
    background-color: ${status === 'positive'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const ContentContainer = styled.View`
  align-items: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
