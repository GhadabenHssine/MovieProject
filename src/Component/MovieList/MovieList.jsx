
import MovieCart from '../MovieCart/MovieCart'
import style from "./movie.module.css"

const MovieList = ({ movie, filterList, rating }) => {


    return (

        <div >
            <div className={style.MovieList}>
                {movie
                    .filter(el => (el.rating >= rating))
                    .filter(car => (car.title.toLowerCase().includes(filterList.toLowerCase().trim())))
                    .map((car, i) =>
                        <MovieCart car={car} key={i} />
                    )}


            </div>
        </div>
    )
}

export default MovieList