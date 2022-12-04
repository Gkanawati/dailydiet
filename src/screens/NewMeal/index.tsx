import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button } from '@components/Button';
import { MealHeader } from '@components/MealHeader';
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
import { createMeal } from '@storage/meal/createMeal';
import { MealStorageDTO } from '@storage/meal/types/MealStorageDTO';
import { useNavigation } from '@react-navigation/native';

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [status, setStatus] = useState('');

  const { navigate } = useNavigation();

  function handleCreateMeal() {
    if (!name || !status || !date || !hour || !description) {
      return Alert.alert(
        'Nova refeição',
        'Preencha todos os campos corretamente.'
      );
    }

    if (status != 'positive' && status != 'negative') {
      return Alert.alert(
        'Nova refeição',
        'Ops, ocorreu um erro com o campo dieta.'
      );
    }

    const newMeal: MealStorageDTO = {
      id: Date.now().toString(),
      name,
      description,
      date,
      hour,
      status,
    };

    createMeal(newMeal);

    navigate('feedback', { status });
  }

  return (
    <Container>
      <MealHeader title='Nova refeição' />

      <ContentContainer>
        <ContainerInput>
          <Label>Nome</Label>
          <Input value={name} onChangeText={setName} />
        </ContainerInput>
        <ContainerInput>
          <Label>Descrição</Label>
          <Input
            value={description}
            onChangeText={setDescription}
            style={{ minHeight: 120 }}
            multiline
          />
        </ContainerInput>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ContainerInput style={{ flex: 5 }}>
            <Label>Data</Label>
            <Input value={date} onChangeText={setDate} />
          </ContainerInput>
          <View style={{ flex: 1 }} />
          <ContainerInput style={{ flex: 5 }}>
            <Label>Hora</Label>
            <Input value={hour} onChangeText={setHour} />
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
        <Button title='Cadastrar refeição' onPress={handleCreateMeal} />
      </ContentContainer>
    </Container>
  );
}
