import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Stats } from '@screens/Stats';

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
    </Navigator>
  );
}
