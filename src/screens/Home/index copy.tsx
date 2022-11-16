import { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { Header } from '@components/Header ';
import { StatsCard } from '@components/StatsCard';

import { useNavigation } from '@react-navigation/native';
import { getMeals } from '@storage/getMeals';
import { MealStorageDTO } from '@storage/MealStorageDTO';

import { Container, TextAlt, TitleSection } from './styles';

export function Home() {
  const [MealsData, setMealsData] = useState<MealStorageDTO[]>([]);
  const { navigate } = useNavigation();

  async function getMealsStored() {
    try {
      const data = await getMeals();
      return data;
    } catch (error) {
      console.log('getMealsStored ~ error', error);
      throw error;
    }
  }

  useEffect(() => {
    const storedMeals = getMealsStored();
    const DATA = [{ date: '12.08.22', data: getMealsStored() }];
    setMealsData(DATA);
  }, []);

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
        sections={MealsData}
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
