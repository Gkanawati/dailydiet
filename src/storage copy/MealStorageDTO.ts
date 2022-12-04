export type MealStorageDTO = {
  title: string;
  data: MealDTO[];
}

export type MealDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'positive' | 'negative' | '';
}