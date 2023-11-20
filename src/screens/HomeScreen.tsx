import { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export const HomeScreen: FC = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title='Go to Detail' onPress={ () => navigation.navigate('DetailScreen') } />
    </View>
  );
}
