import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@components/Button';
import { NewMealHeader } from '@components/NewMealHeader';
import {
  Container,
  ContainerInput,
  ContentContainer,
  IconButton,
  Input,
  Label,
  RowButtons,
  StatusButtonNegative,
  StatusButtonPositive,
  TextButton,
} from './styles';

export function NewMeal() {
  const [status, setStatus] = useState('');

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
          <Input style={{ minHeight: 120 }} multiline />
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
          <StatusButtonPositive
            status={status}
            onPress={() => setStatus('positive')}
          >
            <IconButton color='positive' />
            <TextButton>Sim</TextButton>
          </StatusButtonPositive>
          <View style={{ flex: 1 }} />
          <StatusButtonNegative
            status={status}
            onPress={() => setStatus('negative')}
          >
            <IconButton color='negative' />
            <TextButton>Não</TextButton>
          </StatusButtonNegative>
        </RowButtons>
        <Button title='Cadastrar refeição' />
      </ContentContainer>
    </Container>
  );
}
