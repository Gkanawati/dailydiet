import { useNavigation } from '@react-navigation/native';
import {
  ButtonIcon,
  Container,
  ContentContainer,
  Icon,
  SubTitleHeader,
  TitleHeader,
} from './styles';

export function StatsHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <ContentContainer>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon />
        </ButtonIcon>
        <TitleHeader>90,86%</TitleHeader>
        <SubTitleHeader>das refeições dentro da dieta</SubTitleHeader>
      </ContentContainer>
    </Container>
  );
}
