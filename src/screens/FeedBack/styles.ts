import { FoodStatusProps } from '@components/StatsCard/styles';
import styled, { css } from 'styled-components/native';

type TitleProps = {
  color: FoodStatusProps;
};

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, color }) => css`
  color: 
      ${color === 'positive'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_700};
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
  padding-bottom: 40px;
`;

export const Bold = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const FeedBackImage = styled.Image`
  width: 224px;
  height: 288px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  padding: 0px 60px;
  padding-top: 32px;
`
