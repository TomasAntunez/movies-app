import { FC } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Movie } from '../../interfaces';
import { MovieCard } from '../MovieCard';
import { styles } from './styles';


interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider: FC<Props> = ({ title, movies }) => {
  return (
    <View style={{ height: (title) ? 260 : 220 }}>
      {
        title && <Text style={ styles.text }>{ title }</Text>
      }

      <FlatList
        data={ movies }
        renderItem={ ({ item }) => (
          <MovieCard movie={ item } height={ 200 } width={140} />
        )}
        keyExtractor={ item => item.id.toString() }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
      />
  </View>
  );
};
