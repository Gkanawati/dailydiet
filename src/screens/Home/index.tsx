import { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button } from '@components/Button';
import { Header } from '@components/Header ';
import { MealCard } from '@components/MealCard';
import { StatsCard } from '@components/StatsCard';
import { getMeals, getMealsInSection } from '@storage/meal';
import { MealStorageDTO } from '@storage/meal/types/MealStorageDTO';
import { Container, TextAlt, TitleSection } from './styles';

export function Home() {
  const [mealsData, setMealsData] = useState<MealStorageDTO[]>([]);
  const [loadingMeals, setLoadingMeals] = useState(false);
  const { navigate } = useNavigation();

  async function getMealsStored() {
    try {
      setLoadingMeals(true);
      const allMealsInSection = await getMealsInSection();
      setMealsData(allMealsInSection);
    } catch (error) {
      console.log(error);
      return Alert.alert(
        'Erro',
        'Ocorreu um erro ao carregar as refeições. Por favor, feche a aplicação e tente novamente.'
      );
    } finally {
      setLoadingMeals(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealsStored();
    }, [])
  );

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
        sections={mealsData}
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
        renderSectionHeader={({ section: { title } }) => (
          <TitleSection>{title}</TitleSection>
        )}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
