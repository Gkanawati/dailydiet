import React from 'react';
import { Container, Description, ValueStreak } from './styles';

interface StatisticCardProps {
  value: number;
  subtitle: string;
  status?: 'positive' | 'negative';
}

export function StatisticCardDetail({
  value,
  subtitle,
  status,
}: StatisticCardProps) {
  return (
    <Container status={status}>
      <ValueStreak>{value}</ValueStreak>

      <Description>{subtitle}</Description>
    </Container>
  );
}
