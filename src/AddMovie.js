import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";


// export function AddMovie({ movieList, setMoiveList }) {
  export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie =  ()=>{
    const newMovie = { name,  poster,summary,rating,  trailer };
    console.log(newMovie);
    fetch(`https://62d041ffd9bf9f170586ac03.mockapi.io/movies`,{
  method:"POST",
  body: JSON.stringify(newMovie),
  headers:{
    "Content-Type":"aplplication/json",
  },
  }).then((data)=>data.json());
  };
  return (
    <div>
      <div className="add-movie-form">
        <TextField onChange={(event) => setName(event.target.value)} variant="filled" label="Name"  />
        <input onChange={(event) => setPoster(event.target.value)} required={true}  type="text" placeholder="Poster" />
        <input onChange={(event) => setSummary(event.target.value)} type="text" placeholder="Summary" />
        <input onChange={(event) => setRating(event.target.value)} type="text" placeholder="Rating" />
        <input onChange={(event) => setTrailer(event.target.value)} type="text" placeholder="Trailer" />
        <button onClick= {addMovie}
        variant="contained">Add Movie</button>
      </div>

    </div>
  );
}
