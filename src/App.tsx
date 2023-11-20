import 'react-native-gesture-handler';

import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigation } from './navigation';


const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}


export default App;
