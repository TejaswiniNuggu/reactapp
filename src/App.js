import "./App.css";
//import { MovieList } from "./MovieList";
import { AppBar, Toolbar } from "@mui/material";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Shop_Products } from "./Shop";
import {Details} from "./Details";
import {Detailsecond} from "./Details2"
import {Detail3} from "./Details3";
import { HeadBar } from "./Shop";
import "./App.css";
import { AddColor } from "./AddColor";
import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList.1";
// import { MovieList } from "./MovieList";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { initial_movie_list } from "./initial_movie_list";
// import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import { AddMovie } from "./AddMovie";
import { ProSidebar, Menu, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import IconButton  from "@mui/material/IconButton";
import  Badge  from "@mui/material/Badge";
import SearchIcon from '@mui/icons-material/Search';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {API} from "./global";
export default function App() {
  const [movieList, setMoiveList]= useState(initial_movie_list);
  // console.log(movieList);
  const navigate = useNavigate();
  const [mode , setMode]=useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });

  // fetch("https://62d041ffd9bf9f170586ac03.mockapi.io/movies")
  // .then(data => data.json())
  // .then((mvs) => console.log("movies", mvs));


    return (  
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={4} style={{ minHeight: "100vh", borderRadius:"0px"}}>
      <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate(`/`)}>Home</Button>
          <Button color="inherit" onClick={() => navigate(`/movies`)}>Movie</Button>
          <Button color="inherit" onClick={() => navigate(`/color`)}>Add color</Button>
          <Button color="inherit" onClick={() => navigate(`/rafdfasdfasd`)}>Random Detail</Button>
          <Button color="inherit" onClick={() => navigate(`/addmovie`)}>Add Movie</Button>
          <Button  startIcon={mode=="light"?<Brightness4Icon /> : <Brightness7Icon />}color="inherit" onClick={() => setMode(mode=="light"?"dark":"light")}>
         {mode=="light"?"dark":"light"} mode
            </Button>
        </Toolbar>
      </AppBar>
      {/* <nav>
       <ul>
         <li><Link to="/movies">Movies</Link></li>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/color">AddColor</Link></li>
         {/* <li><Link to="/moviedetails">Movie Details</Link></li> */}
      {/* <li><Link to="/rafdfasdfasd">Random Details</Link></li>
       <li><Link to="addmovie">AddMovie</Link></li> */}
      {/* </ul> */}
      {/* </nav>   */}


      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<MovieList movieList={movieList} setMoiveList={setMoiveList} />} /> */}
        <Route path="/movies" element={<MovieList />}/>
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        {/* <Route path="/addmovie" element={<AddMovie movieList={movieList} setMoiveList={setMoiveList} />} /> */}
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/color" element={<AddColor />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

    </div>;
    </Paper>
      </ThemeProvider>
    ); 



      }