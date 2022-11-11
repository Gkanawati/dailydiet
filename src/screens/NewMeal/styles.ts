import { FoodStatusProps } from '@components/StatsCard/styles';
import { TextInput, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type StatusButtonProps = {
  status?: FoodStatusProps | string;
};

type IconStatusButtonProps = {
  color: FoodStatusProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: -10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContainerInput = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 4px;
`;

export const Input = styled(TextInput)`
  min-height: 48px;
  border: 1px solid;
  border-radius: 6px;
  padding: 14px;
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const RowButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const StatusButtonPositive = styled(TouchableOpacity)<StatusButtonProps>`
  flex: 5;
  flex-direction: row;
  max-height: 50px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  ${({ theme, status }) => css`
    background-color: ${status === 'positive'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_200};
    border: ${status === 'positive' ? 1 : 0}px;
    border-color: ${status === 'positive' && theme.COLORS.GREEN_DARK};
  `}
`;
export const StatusButtonNegative = styled(TouchableOpacity)<StatusButtonProps>`
  flex: 5;
  flex-direction: row;
  max-height: 50px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  ${({ theme, status }) => css`
    background-color: ${status === 'negative'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
    border: ${status === 'negative' ? 1 : 0}px;
    border-color: ${status === 'negative' && theme.COLORS.RED_DARK};
  `}
`;

export const TextButton = styled.Text`
  padding-left: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const IconButton = styled.View<IconStatusButtonProps>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  ${({ theme, color }) => css`
    background-color: ${color === 'positive'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;
