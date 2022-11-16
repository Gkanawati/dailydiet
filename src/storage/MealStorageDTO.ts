export type MealStorageDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'positive' | 'negative' | '';
}