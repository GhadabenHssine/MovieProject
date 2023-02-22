import React from 'react'
import style from "./movie.module.css"
import { Rating } from '@mui/material'


const MovieCart = ({ car }) => {



    return (
        <>

            <div className={style.bloc}>
                <p className={style.titre}>{car.title}</p>
                <img src={car.posterURL} alt="joker" className={style.img} />
                <div className={style.desc}>{car.description}</div>
                <Rating name="read-only" value={car.rating} readOnly className={style.rating} />
            </div >
        </>
    )
}

export default MovieCart