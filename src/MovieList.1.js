import { useEffect, useState } from "react";
import { Movie } from "./Movie";


// export function MovieList({ movieList, setMoiveList }) {
//fetching data without props
export function MovieList() {
  const [movieList, setMoiveList]= useState([]);
  const getMovies=()=>{
    fetch("https://62d041ffd9bf9f170586ac03.mockapi.io/movies",
  {method:"GET",})
  .then((data) => data.json())
  .then((mvs) => setMoiveList(mvs));
  }
  //surrond fetch with useefect to call it once and the dependency array is empty
  //getting data from api

useEffect(()=> getMovies(),[])

const deleteMovie = (id) => {
  fetch(`https://62d041ffd9bf9f170586ac03.mockapi.io/movies/${id}`,
  {method:"DELETE",})
  .then((data) => data.json())
  .then(()=>getMovies());
};
 
  return (
    
      <div className="movie-list-container">
        {movieList.map((mv) => (
          <Movie key={mv.id} movie={mv} id={mv.id} 
          deleteButton={
          <button 
          onClick={() => deleteMovie(mv.id)}
          >
            Delete
            </button>
            }
            />
        ))}
      </div>
    // </div>
  );
}
