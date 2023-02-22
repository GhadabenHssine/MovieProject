
import style from "../MovieList/movie.module.css"
import { Rating } from '@mui/material'

const Filterl = ({ setFilterList, setRating }) => {




    return (
        <>
            <div className={style.blocfilter}>
                <div>
                    <input type="text" placeholder="Search..." className={style.serch} onChange={(e) => { setFilterList(e.target.value) }} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Rating
                    name="simple-controlled"

                    onChange={(e) => { setRating(e.target.value) }}
                />
            </div>






        </>
    )
}

export default Filterl