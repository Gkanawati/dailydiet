import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { Stats } from '@screens/Stats';
import { NewMeal } from '@screens/NewMeal';
import { EditMeal } from '@screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='home' component={Home} />
      <Screen name='new' component={NewMeal} />
      <Screen name='stats' component={Stats} />
      <Screen name='meal' component={Meal} />
      <Screen name='edit' component={EditMeal} />
    </Navigator>
  );
}
