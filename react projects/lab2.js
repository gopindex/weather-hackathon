class MovieList {
    constructor(noofMovies,Movies,refMovies){
        this.noofMovies = noofMovies;
        this.Movies = Movies;
        this.refMovies = refMovies;
    }
}
class Movie {
    constructor(title,duration,ratings){
        this.title = title;
        this.duration = duration;
        this.ratings = ratings;
    }
    addMovie = function() {
        let movie = new Movies(this.title,this.duration,this.ratings)
        let MovieList = new MovieList();
        MovieList.array.forEach(element => {
            
        });
        MovieList.push(movie.title);
        return MovieList;
    }
    showAllMovies = function() {
        let MovieList = new MovieList();
        console.log(MovieList.movies);
        return "all movies listed";
    }
    setCurrentMovie = function(moviename) {
        let MovieList = new MovieList();
        MovieList.refMovies = MovieList.movies.filter((movie)=>MovieList.refMovies == movie);
        return "current movie set";
    }

}