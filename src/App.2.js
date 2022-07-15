import { AddColor } from "./AddColor";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList.1";
import { Home } from "./Home";
import { useState } from "react";
import { NotFound } from "./NotFound";
import { initial_movie_list } from "./initial_movie_list";
import Button from "@mui/material/Button";
import { AddMovie } from "./AddMovie";
import { ProSidebar, Menu, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';




export default function App() {
  const [movieList, setMoiveList] = useState(initial_movie_list);
  // console.log(movieList);
  const navigate = useNavigate();
  const routes = <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<MovieList movieList={movieList} setMoiveList={setMoiveList} />} />
    <Route path="/films" element={<Navigate replace to="/movies" />} />
    <Route path="/moviedetails/:id" element={<MovieDetails movieList={movieList} />} />
    <Route path="/addmovie" element={<AddMovie movieList={movieList} setMoiveList={setMoiveList} />} />
    <Route path="/color" element={<AddColor />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate replace to="/404" />} />
  </Routes>;
  const [like, setLike] = useState(0);
  //  const [dislike, setDisLike] = useState(0);
  return (

    <div className="dash">
      <div className="side_nav">
        <ProSidebar>
          <SidebarHeader>
            <Menu>
              {/* <Button color="inherit" onClick={() => navigate(`/color`)}>Add color</Button> */}
              <SubMenu title="Add color">
                <Button color="inherit" onClick={() => navigate(`/color`)}>Add color</Button>
              </SubMenu>
            </Menu>
            <Button color="inherit" onClick={() => navigate(`/`)}>Home</Button>
          </SidebarHeader>
          <Button color="inherit" onClick={() => navigate(`/movies`)}>Movie</Button>
          <Button color="inherit" onClick={() => navigate(`/color`)}>Add color</Button>
          <Button color="inherit" onClick={() => navigate(`/rafdfasdfasd`)}>Random Detail</Button>
        </ProSidebar>

      </div>

      <div className="top_nav">
        <div>
          {/* <AppBar>
              <Toolbar> */}
          <TextField onChange={(event) => setName(event.target.value)} variant="filled" label="Name" />
          <SearchIcon onClick={() => navigate(`/rafdfasdfasd`)}>

          </SearchIcon>
          <Button color="inherit" onClick={() => navigate(`/`)}>Home</Button>
          <Button color="inherit" onClick={() => navigate(`/movies`)}>Movie</Button>
          <Button color="inherit" onClick={() => navigate(`/color`)}>Add color</Button>
          {/* <Button color="inherit" onClick={() => navigate(`/rafdfasdfasd`)}>Random Detail</Button> */}
          <Button color="inherit" onClick={() => navigate(`/addmovie`)}>Add Movie</Button>
          <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="like">
            <Badge badgeContent={like} color="primary">
              👍
            </Badge>
          </IconButton>
          {/* </Toolbar>
            </AppBar> */}


          {routes}
        </div>

      </div>


    </div>



  );

}
