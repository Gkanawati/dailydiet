import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { Header } from '@components/Header ';
import { StatsCard } from '@components/StatsCard';
import { SectionList, Text, View } from 'react-native';

import { Container, TextAlt, TitleSection } from './styles';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    date: '12.08.22',
    data: [
      {
        id: '1',
        name: 'Macarrão',
        description: 'Macarrão com molho',
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '2',
        name: 'Cheetos',
        description: 'Elma Chips',
        date: '12.08',
        hour: '12:00',
        status: 'negative',
      },
    ],
  },
  {
    date: '11.08.22',
    data: [
      {
        id: '3',
        name: 'Salada',
        description: 'Saladinha com Frango',
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '4',
        name: 'Vitamina',
        description: 'Vitamina de morango',
        date: '12.08',
        hour: '12:00',
        status: 'negative',
      },
    ],
  },
  {
    date: '10.08.22',
    data: [
      {
        id: '10',
        name: 'Macarrão',
        description: 'Macarrão com molho',
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '`2',
        name: 'Cheetos',
        description: 'Salgadinho',
        date: '12.08',
        hour: '12:00',
        status: 'negative',
      },
    ],
  },
  {
    date: '09.08.22',
    data: [
      {
        id: '13',
        name: 'Salada',
        description: 'Saladinha com Frango',
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '14',
        name: 'Vitamina',
        description: 'Vitamina de morango',
        date: '12.08',
        hour: '12:00',
        status: 'negative',
      },
    ],
  },
];

export function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <SectionList
        ListHeaderComponent={
          <>
            <Header />

            <StatsCard
              statsNumber={90.86}
              status='positive'
              onPress={() => navigate('stats')}
            />

            <TextAlt>Refeições</TextAlt>
            <Button title='+ Nova refeição' onPress={() => navigate('new')} />
          </>
        }
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            id={item.id}
            name={item.name}
            description={item.description}
            hour={item.hour}
            date={item.date}
            status={item.status === 'positive' ? 'positive' : 'negative'}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <TitleSection>{date}</TitleSection>
        )}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
