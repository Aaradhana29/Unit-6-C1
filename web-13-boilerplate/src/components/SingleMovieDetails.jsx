import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export const SingleMovieDetails = () => {
    const {movieId} = useParams()
    const [data,setData] = useState(null);

    useEffect(() => {
    axios({
      method:"get",
      url:`https://movie-fake-server.herokuapp.com/data/${movieId}`
    })
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))

}, [movieId]);

    // make a request to get the details
  return (
  <>
       <h1>SinglePage</h1>
       {data && <> <h2>{data.movie_name}</h2>
       <img src= {data.image_url}/>
       
             <h4> {data.release_date} </h4>
             <h4> {data.rating} </h4>
             <h4> {data.genre} </h4>
       </>}
  </>
  )
}
