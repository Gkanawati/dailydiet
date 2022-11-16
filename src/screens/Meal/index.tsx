import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@components/Button';
import { MealHeader } from '@components/MealHeader';
import { FoodStatusProps } from '@components/StatsCard/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
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
interface RouteParams {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: FoodStatusProps;
}

export function Meal() {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { id, name, description, date, hour, status } =
    route.params as RouteParams;

  const [selectedStatus, setSelectedStatus] = useState(status);

  function handleEditMeal() {
    goBack();
  }

  return (
    <Container>
      <MealHeader title={name} />

      <ContentContainer>
        <ContainerInput>
          <Label>Nome</Label>
          <Input value={name} />
        </ContainerInput>
        <ContainerInput>
          <Label>Descrição</Label>
          <Input value={description} style={{ minHeight: 120 }} multiline />
        </ContainerInput>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ContainerInput style={{ flex: 5 }}>
            <Label>Data</Label>
            <Input value={date} onChangeText={() => {}} />
          </ContainerInput>
          <View style={{ flex: 1 }} />
          <ContainerInput style={{ flex: 5 }}>
            <Label>Hora</Label>
            <Input value={hour} />
          </ContainerInput>
        </View>

        <Label>Está dentro da dieta?</Label>
        <RowButtons>
          <StatusButtonPositive
            status={selectedStatus}
            onPress={() => setSelectedStatus('positive')}
          >
            <IconButton color='positive' />
            <TextButton>Sim</TextButton>
          </StatusButtonPositive>
          <View style={{ flex: 1 }} />
          <StatusButtonNegative
            status={selectedStatus}
            onPress={() => setSelectedStatus('negative')}
          >
            <IconButton color='negative' />
            <TextButton>Não</TextButton>
          </StatusButtonNegative>
        </RowButtons>
        <Button title='Salvar Alterações' onPress={() => handleEditMeal()} />
      </ContentContainer>
    </Container>
  );
}
