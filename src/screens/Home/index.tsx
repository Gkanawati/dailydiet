import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { Header } from '@components/Header ';
import { StatsCard } from '@components/StatsCard';
import { SectionList, Text, View } from 'react-native';

import { Container, TextAlt, TitleSection } from './styles';

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
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '4',
        name: 'Vitamina',
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
        date: '12.08',
        hour: '22:00',
        status: 'positive',
      },
      {
        id: '14',
        name: 'Vitamina',
        date: '12.08',
        hour: '12:00',
        status: 'negative',
      },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header />

      <StatsCard statsNumber={90.86} status='positive' />

      <TextAlt>Refeições</TextAlt>
      <Button />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            name={item.name}
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
