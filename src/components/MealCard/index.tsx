import { FoodStatusProps } from '@components/StatsCard/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacityProps } from 'react-native';
import { Container, Divider, HourTime, IconStatus, TitleCard } from './styles';

export interface FoodProps extends TouchableOpacityProps {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: FoodStatusProps;
}

export function MealCard({
  id,
  name,
  description,
  hour,
  status,
  date,
}: FoodProps) {
  const { navigate } = useNavigation();

  return (
    <Container
      onPress={() =>
        navigate('meal', { name, description, date, hour, id, status })
      }
    >
      <HourTime>{hour}</HourTime>
      <Divider />
      <TitleCard>{name}</TitleCard>
      <IconStatus color={status} />
    </Container>
  );
}
