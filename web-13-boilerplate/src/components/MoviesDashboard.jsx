import axios from "axios";
import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
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


      //filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
    let filtered = data.filter((movie) => movie.genre == e.target.value);
    console.log(filtered);
    setData([...filtered]);
}
  return (
    <>
    
      <h2>Movies</h2>
      <select  onChange={handleFilter} className="filter">
        {/* map through the filter  */}
        {
          genres.map((genre)=>{
            return <option value={genre}>{genre}</option>
          })
        }
      </select> 
      <div className = "movies-list">
        {/* map throught th movie list and display the results */}
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
       </div>
    </>
  );
};

