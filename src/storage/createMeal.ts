import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';
import { MealStorageDTO } from './MealStorageDTO';
import { getMeals } from './getMeals';

export async function createMeal(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await getMeals();

    console.log(storedMeals)

    const newMealsString = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, newMealsString)
  } catch (error) {
    console.log('createMeal ~ error', error);
    throw error;
  }
}