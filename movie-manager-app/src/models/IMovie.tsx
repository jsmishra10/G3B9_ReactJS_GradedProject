export default interface IMovie {

    id: string,
    title: string,   
    storyline: string,     
    imdbRating: number,
    posterurl: string,
    actors: string[],
    genres: string[],
    year: string

}

/* export default interface IMovieList {
    movieList : IMovie[]
} */