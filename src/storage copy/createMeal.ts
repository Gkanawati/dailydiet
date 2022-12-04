import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';
import { MealDTO, MealStorageDTO } from './MealStorageDTO';
import { getMeals } from './getMeals';

export async function createMeal(newMeal: MealDTO) {
  try {
    const storedMeals = await getMeals();
    console.log('createMeal ~ storedMeals', storedMeals);

    const ArrStoredMeals = [storedMeals]


    const SaveMeal: MealStorageDTO = {
      title: newMeal.date,
      data: [newMeal]
    };

    ArrStoredMeals.push(SaveMeal)
    console.log('createMeal ~ ArrStoredMeals', ArrStoredMeals);

    // const storageMealsString: MealStorageDTO = {
    //   title: newMeal.date,
    //   data: [...SaveMeal.data, newMeal]
    // }

    const newMealsString = JSON.stringify(ArrStoredMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, newMealsString)
  } catch (error) {
    console.log('createMeal ~ error', error);
    throw error;
  }
}