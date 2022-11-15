import { useState } from 'react';
import { MealHeader } from '@components/MealHeader';
import { FoodStatusProps } from '@components/StatsCard/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, ContentContainer } from './styles';
interface RouteParams {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: FoodStatusProps;
}

export function Meal() {
  const { goBack } = useNavigation();

  const route = useRoute();
  const { id, name, description, date, hour, status } =
    route.params as RouteParams;

  const [selectedStatus, setSelectedStatus] = useState(status);

  return (
    <Container>
      <MealHeader />

      <ContentContainer></ContentContainer>
    </Container>
  );
}
