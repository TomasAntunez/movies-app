import { FC } from 'react';
import { ActivityIndicator, View, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../../hooks';
import { MovieCard, HorizontalSlider } from '../../components';
import { styles } from './styles';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen: FC = () => {

  const { moviesInCinema, popularMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();


  if (isLoading) {
    return (
      <View style={ styles.spinner }>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={ styles.mainCarouselContainer }>
          <Carousel
            data={ moviesInCinema }
            renderItem={ ({ item }) => <MovieCard movie={ item } /> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={ 0.9 }
          />
        </View>

        <HorizontalSlider title='Popular' movies={ popularMovies } />
      </View>
    </ScrollView>
  );
}
