import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
export function Movie({ movie, id , deleteButton}) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  // const paraStyles = {
  //   display: show ? "block" : "none",
  // };
  const navigate = useNavigate();
  return (

    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="seg2">
        <h2 className="movie-name">{movie.name} <IconButton onClick={() => navigate(`/moviedetails/${id}`)} color="primary" aria-label="movie details">
          <InfoIcon />
        </IconButton>  <IconButton onClick={() => setShow(!show)} color="primary" aria-label="movie details">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton></h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      {/* <button onClick={() => navigate(`/moviedetails/${id}`)}>info</button> */}


      {/* <button onClick={() => setShow(!show)}>toggle summary</button> */}
      {/* <p style={paraStyles} className="movie-summary">{movie.d}</p> */}
      {/* conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      {/* <button onClick={()=>navigate(-1)}>back</button>  */}
      <Counter />{deleteButton}
    </Card>
  );
}
