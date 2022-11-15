import { FoodStatusProps } from '@components/StatsCard/styles';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type IconStatusButtonProps = {
  color: FoodStatusProps;
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.6,
}))`
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
  flex: 1;
`;

export const IconStatus = styled.View<IconStatusButtonProps>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  margin-right: 4px;
  ${({ theme, color }) => css`
    background-color: ${color === 'positive'
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `}
`;
