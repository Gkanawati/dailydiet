import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  margin: 4px 0;
  max-height: 50px;
  min-height: 50px;
  padding: 12px;
`;

export const Divider = styled.View`
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 14px;
  margin: 0px 14px;
`;

export const HourTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const TitleCard = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
