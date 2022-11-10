import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 24px;
  padding-top: ${Platform.OS === 'ios' ? 20 : 0}px;
`;

export const TextAlt = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TitleSection = styled.Text`
  margin-top: 30px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    line-height: ${theme.LINE_HEIGHT};
  `}
`;
