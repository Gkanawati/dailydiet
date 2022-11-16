import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@components/Button';
import PositiveFeedback from '@assets/PositiveFeedback.png';
import NegativeFeedback from '@assets/NegativeFeedback.png';
import { FoodStatusProps } from '@components/StatsCard/styles';
import {
  Bold,
  Container,
  ContainerButton,
  FeedBackImage,
  SubTitle,
  Title,
} from './styles';

interface RouteParams {
  status: FoodStatusProps;
}

export function FeedBack() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { status } = route.params as RouteParams;

  return (
    <Container>
      <Title color={status}>
        {status === 'positive' ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {status == 'positive' ? (
        <SubTitle>
          Você continua <Bold>dentro da dieta.</Bold> Muito bem!
        </SubTitle>
      ) : (
        <SubTitle>
          Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando
          e não desista!
        </SubTitle>
      )}

      <FeedBackImage
        source={status == 'positive' ? PositiveFeedback : NegativeFeedback}
      />

      <ContainerButton>
        <Button
          title='Ir para a página principal'
          onPress={() => navigate('home')}
        />
      </ContainerButton>
    </Container>
  );
}
