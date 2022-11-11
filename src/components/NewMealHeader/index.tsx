import { useNavigation } from '@react-navigation/native';
import {
  ButtonIcon,
  Container,
  ContentContainer,
  Icon,
  TitleHeader,
} from './styles';

export function NewMealHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <ContentContainer>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon />
        </ButtonIcon>
        <TitleHeader>Nova refeição</TitleHeader>
      </ContentContainer>
    </Container>
  );
}
