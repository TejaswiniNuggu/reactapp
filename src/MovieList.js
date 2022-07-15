import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { Movie } from "./Movie";
//second type for web page creation
const movielist =[
  {
    name: "RRR",
    poster: "https://im.rediff.com/movies/2022/jan/03rrr1.jpg?w=670&h=900",
    rating: "8.8",
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
  {
    name: "RRR",
    poster: "https://im.rediff.com/movies/2022/jan/03rrr1.jpg?w=670&h=900",
    rating: "8.8",
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
  {
    name: "RRR",
    poster: "https://im.rediff.com/movies/2022/jan/03rrr1.jpg?w=670&h=900",
    rating: "8.8",
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
  {
    name: "RRR",
    pic: "https://im.rediff.com/movies/2022/jan/03rrr1.jpg?w=670&h=900",
    rating: "8.8",
    d: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
  {
    name: "RRR",
    pic: "https://im.rediff.com/movies/2022/jan/03rrr1.jpg?w=670&h=900",
    rating: "7",
    d: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
];
export function MovieList() {
  const movielist = initial_movie_list;
   // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  <div>
  </div>
  return (
  // <div>
    //   <div className="add-movie-form">
    //     <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" />
    //     <input onChange={(event) => setPoster(event.target.value)} type="text" placeholder="Poster" />
    //     <input onChange={(event) => setSummary(event.target.value)} type="text" placeholder="Summary" />
    //     <input onChange={(event) => setRating(event.target.value)} type="text" placeholder="Rating" />
    //     <input onChange={(event) => setTrailer(event.target.value)} type="text" placeholder="Trailer" />
    //     <button onClick={() => {
    //       const newMovie = { name, rating, summary, poster, trailer };
    //       console.log(newMovie);
    //       setMoiveList([...movieList, newMovie]);
    //     }} variant="contained">Add Movie</button>
    //   </div>
    <div className="movie-list-container">
      {movielist.map((mv,index) => (
        <Movie movie={mv} id={index}/>
      ))}
    </div>
    );
}


function Movie({ movie,id }) {
  // more than 8 shd be green th rating else red 
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };
 const navigate = useNavigate();
  return (
  
    <div className="movie-container">
      <img src={movie.pic} alt={movie.name} className="movie-poster" />
      <div className="seg2">
        <h2 className="movie-name">{movie.name} -{id}</h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      <button onClick={() => navigate(`/moviesdetails/${id}`)}>info</button>
      <button onClick={() => setShow(!show)}>toggle summary</button>
      {/* <p style={paraStyles} className="movie-summary">{movie.d}</p> */}
      {/* conditional rendering */}
{show ? <p className="movie-summary">{movie.d}</p> :""}
     <button onClick={()=>navigate(-1)}>back</button> 
      <Counter />
    </div>

  );
}
