import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealStorageDTO } from './MealStorageDTO';
import { MEAL_COLLECTION } from './storageConfig';

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    await AsyncStorage.removeItem(MEAL_COLLECTION)
    const meals: MealStorageDTO = storage ? JSON.parse(storage) : [];
    console.log('getMeals ~ meals', meals);

    return meals;
  } catch (error) {
    console.log('getMeals ~ error', error);
    throw error;
  }
}