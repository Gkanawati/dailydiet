import { useCallback, useState } from 'react';
import { FlatList, SectionList } from 'react-native';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { Header } from '@components/Header ';
import { StatsCard } from '@components/StatsCard';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getMeals } from '@storage/getMeals';
import { MealStorageDTO } from '@storage/MealStorageDTO';

import { Container, TextAlt } from './styles';

export function Home() {
  const [MealsData, setMealsData] = useState<MealStorageDTO[]>([]);
  const { navigate } = useNavigation();

  async function getMealsStored() {
    try {
      const data = await getMeals();
      data.forEach((item) => console.log(item));
      setMealsData(data);
      return data;
    } catch (error) {
      console.log('getMealsStored ~ error', error);
      throw error;
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealsStored();
    }, [])
  );

  return (
    <Container>
      <FlatList
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
        data={MealsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            id={item.id}
            name={item.name}
            description={item.description}
            hour={item.hour}
            date={item.date}
            status={item.status === 'positive' ? 'positive' : 'negative'}
            onPress={() =>
              navigate('meal', {
                id: item.id,
                name: item.name,
                description: item.description,
                date: item.date,
                hour: item.hour,
                status: item.status,
              })
            }
          />
        )}
        // renderSectionHeader={({ section: { date } }) => (
        //   <TitleSection>{date}</TitleSection>
        // )}
        // stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
