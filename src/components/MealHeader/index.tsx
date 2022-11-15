import { useNavigation } from '@react-navigation/native';
import {
  ButtonIcon,
  Container,
  ContentContainer,
  Icon,
  TitleHeader,
} from './styles';

type HeaderProps = {
  title?: string;
};

export function MealHeader({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <ContentContainer>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon />
        </ButtonIcon>
        {title && <TitleHeader>{title}</TitleHeader>}
      </ContentContainer>
    </Container>
  );
}
