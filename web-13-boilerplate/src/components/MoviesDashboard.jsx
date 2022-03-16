import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import "./Movies.css"
const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

 export const MoviesDashboard = () => {
     const [data,setData] = useState([])
     const [loading,setLoading] = useState(false);
     const getAllMovies = () =>{
       setLoading(true)
       axios({
         method:"get",
         url:"https://movie-fake-server.herokuapp.com/data",
       })
       .then((res) => setData(res.data))
       .catch((err) => console.log(err))
       .finally(()=> setLoading(false));
     };
    // to get all movies list on component mounts
   useEffect(() => {
          getAllMovies();
    //   dispatch an action to the store 

 }, []);


//    filter by genre 
// const handleFilter = (e)=>{
//     // dispach filterby genre action to the store
// }
  return (
    <>
      <h2>Movies</h2>
      <div className = "movies-list">
      {loading && <h2>Loading.......</h2>}
        {!loading && data && data.map((item) =>{
          return <>
           <Link key= {item.id} to={`/movies/${item.id}`}> 
             <img src={item.image_url}/> 
             <p> {item.movie_name} </p> 
             <p> {item.release_date} </p>
             <p> {item.rating} </p>
             <p> {item.genre} </p>
           </Link>
          </>
        })}
      {/* <select  onChange={handleFilter}>
        map through the filter 
      </select> */}
       {/* <div className = "movies-list">  */}
        {/* map throught th movie list and display the results */}
       </div>
    </>
  );
};

