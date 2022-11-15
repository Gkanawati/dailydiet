import { FoodStatusProps } from '@components/StatsCard/styles';
import styled, { css } from 'styled-components/native';

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
