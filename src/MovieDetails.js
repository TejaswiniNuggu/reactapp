import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {API} from "./global";



export function MovieDetails() {
  const { id } = useParams();
  // console.log(id)
  // const movie = movieList[id];
  // console.log(movie);
  const [movie, setMoive]= useState({});
  useEffect(()=>{
    fetch(`https://62d041ffd9bf9f170586ac03.mockapi.io/movies/${id}`,
    {method:"GET",})
    .then((data) => data.json())
    .then((mv) =>setMoive(mv));

  },[id]);
console.log(setMoive)
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // const [show, setShow] = useState(true);
  // const paraStyles = {
  //   display: show ? "block" : "none",
  // };
  const navigate = useNavigate();
  return (

    <div className="movie-details-container">
      <iframe width="885" height="498" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-info">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p classNAme="movie-summary">{movie.summary}</p>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
        <Button onClick={() => navigate(-1)} variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      </div>
    </div>
  );

}
