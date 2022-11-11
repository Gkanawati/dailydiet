import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: -10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const StatsTitle = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 33px 24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const StatsSubtitle = styled.Text.attrs(() => ({
  umberOfLines: 1,
}))`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
