import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StatisticCardProps {
  status?: 'positive' | 'negative';
}

export const Container = styled(View)<StatisticCardProps>`
  margin-bottom: 12px;
  padding: 16px 26px;
  justify-content: center;
  align-items: center;
  ${({ theme, status }) => css`
    background-color: ${!status
      ? theme.COLORS.GRAY_200
      : status === 'positive'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
  border-radius: 8px;
`;

export const ValueStreak = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;
