import { Button } from '@components/Button';
import { NewMealHeader } from '@components/NewMealHeader';
import { TouchableOpacity, View } from 'react-native';
import theme from '../../theme';
import {
  Container,
  ContainerInput,
  ContentContainer,
  IconButton,
  Input,
  Label,
  RowButtons,
  StatusButton,
  TextButton,
} from './styles';

export function NewMeal() {
  return (
    <Container>
      <NewMealHeader />

      <ContentContainer>
        <ContainerInput>
          <Label>Nome</Label>
          <Input />
        </ContainerInput>
        <ContainerInput>
          <Label>Descrição</Label>
          <Input style={{ minHeight: 120 }} />
        </ContainerInput>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ContainerInput style={{ flex: 5 }}>
            <Label>Data</Label>
            <Input />
          </ContainerInput>
          <View style={{ flex: 1 }} />
          <ContainerInput style={{ flex: 5 }}>
            <Label>Hora</Label>
            <Input />
          </ContainerInput>
        </View>

        <Label>Está dentro da dieta?</Label>
        <RowButtons>
          <StatusButton status=''>
            <IconButton color='positive' />
            <TextButton>Sim</TextButton>
          </StatusButton>
          <View style={{ flex: 1 }} />
          <StatusButton status=''>
            <IconButton color='negative' />
            <TextButton>Não</TextButton>
          </StatusButton>
        </RowButtons>
        <Button title='Cadastrar refeição' />
      </ContentContainer>
    </Container>
  );
}
