import { FoodStatusProps } from '@components/StatsCard/styles';
import { Container, Divider, HourTime, TitleCard } from './styles';

export interface FoodProps {
  name: string;
  description?: string;
  date: string;
  hour: string;
  status: FoodStatusProps;
}

export function MealCard({ name, description, hour, status }: FoodProps) {
  return (
    <Container>
      <HourTime>{hour}</HourTime>
      <Divider />
      <TitleCard>{name}</TitleCard>
    </Container>
  );
}
