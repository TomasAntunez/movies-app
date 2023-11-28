import { FC } from 'react';
import { Image, View } from 'react-native';

import { Movie } from '../../interfaces';
import { styles } from './styles';


interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard: FC<Props> = ({ movie, height = 420, width = 300 }) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  return (
    <View style={{ ...styles.container, height, width }}>
      <View style={ styles.containerImage }>
        <Image source={{ uri }} style={ styles.image } />
      </View>
    </View>
  );
}
