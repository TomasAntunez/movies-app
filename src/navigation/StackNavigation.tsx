import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailScreen } from '../screens';


const Stack = createStackNavigator();

export const StackNavigation: FC = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
      },
      gestureEnabled: true
    }}>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}