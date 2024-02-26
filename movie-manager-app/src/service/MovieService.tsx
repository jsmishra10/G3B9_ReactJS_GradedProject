import axios from "axios";
import IMovie from "../models/IMovie";




export const getMovieList = (dataUrl : string) => {

    return axios.get<IMovie[]>(dataUrl).then(response => response.data)

}



export const addToFav = (movieRec : Omit<IMovie,"id">) => {

    return axios.post<IMovie>("http://localhost:4000/favourite",
    movieRec,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
)
.then( response => response.data )

}


export const getMovieDetailsById = (type: string, id: string) => {

    return axios.get<IMovie>('http://localhost:4000/' + type + '/' + id).then(response => response.data)
}


export const removeFromFav = (id: string) => {

    return axios.delete('http://localhost:4000/favourite/' + id).then(response => response.data)

}