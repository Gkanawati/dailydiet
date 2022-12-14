import { useNavigation } from '@react-navigation/native';
import {
  ButtonIcon,
  Container,
  ContentContainer,
  Icon,
  SubTitleHeader,
  TitleHeader,
} from './styles';

export type Props = {
  status: 'positive' | 'negative';
};

export function StatsHeader({ status }: Props) {
  const navigation = useNavigation();

  return (
    <Container status={status}>
      <ContentContainer>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon status={status} />
        </ButtonIcon>
        <TitleHeader>90,86%</TitleHeader>
        <SubTitleHeader>das refeições dentro da dieta</SubTitleHeader>
      </ContentContainer>
    </Container>
  );
}
