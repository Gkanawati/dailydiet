import { TouchableOpacityProps } from 'react-native';
import {
  ArrowIcon,
  Container,
  ContentContainer,
  FoodStatusProps,
  SubTitle,
  Title,
} from './styles';

interface StatsCardProps extends TouchableOpacityProps {
  statsNumber: number;
  status: FoodStatusProps;
}

export function StatsCard({ statsNumber, status, ...rest }: StatsCardProps) {
  return (
    <Container status={status} {...rest}>
      <ArrowIcon status={status} />
      <ContentContainer>
        <Title>{statsNumber}%</Title>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </ContentContainer>
    </Container>
  );
}
