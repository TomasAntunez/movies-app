import { useEffect, useState } from "react";

import { movieDBApi } from "../api";
import { MovieDBResponse, Movie } from "../interfaces";


export const useMovies = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ moviesInCinema, setMoviesInCinema ] = useState<Movie[]>([]);
  const [ popularMovies, setPopularMovies ] = useState<Movie[]>([]);


  const getMovies = async () => {
    const { data: nowPlayingData } = await movieDBApi.get<MovieDBResponse>('/now_playing');
    const { data: popularData } = await movieDBApi.get<MovieDBResponse>('/popular');

    setMoviesInCinema(nowPlayingData.results);
    setPopularMovies(popularData.results);

    setIsLoading(false);
  };


  useEffect(() => {
    getMovies();
  }, []);


  return {
    moviesInCinema,
    popularMovies,
    isLoading
  };
};