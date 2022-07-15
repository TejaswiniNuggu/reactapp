// import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar} from "@mui/material";
import { Home } from "./Home";
import "./App.css";
import { Link } from 'react-router-dom';
import {useState} from "react";
import { Routes, Route,navigate, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton  from "@mui/material/IconButton";
import  Badge  from "@mui/material/Badge";
// import { ProSidebar, Menu, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.css';
export function Shop_Products(){
    const productdetail=[{
        image: "450*300",
        name:"Fancy Product",
        pricerange:"$40.00-$80.00",
        opinion:"view options"
    },
    {
        image: "450*300",
        name:"Fancy Product",
        pricerange:"$40.00-$80.00",
        opinion:"view options"
    },
    {
      image: "450*300",
      name:"Fancy Product",
      pricerange:"$40.00-$80.00",
      opinion:"view options"
  },
  {
    image: "450*300",
    name:"Fancy Product",
    pricerange:"$40.00-$80.00",
    opinion:"view options"
},
{
  image: "450*300",
  name:"Fancy Product",
  pricerange:"$40.00-$80.00",
  opinion:"view options"
},
{
  image: "450*300",
  name:"Fancy Product",
  pricerange:"$40.00-$80.00",
  opinion:"view options"
},
  ];
    return (
        <div className="product-pack">
          {productdetail.map((pd) => (
            <ProductSinps product={pd} />
          ))}
        </div>
      );
}

export function ProductSinps({product}){
  const navigate = useNavigate();
return (
  
    <div className="product-box"> 
    <h3 className="product-image">{product.image}<span><button>sale</button></span></h3>
    <div className="product-name-price">
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.pricerange}</p>
    </div>
    <button onClick={() => navigate(`/addtocart`) }className="product-opinion">{product.opinion}</button>
 
  </div>

);
}

 export function HeadBar(){
  const navigate = useNavigate();
  const [like, setLike] = useState(0);
  const route=  <Routes>
  <Route path="/" element={<intial />} />
  </Routes>
  return (
  <div className="head">
  
          <div className="headbar">
            <h6>START BOOTSTRAP</h6>
        <button onClick={() => navigate(`/`) }>home</button>
        <nav>
        <ul className="lists">
     <Link to="/home">Home</Link>
  </ul>
  </nav>
       <button onClick={() => navigate(`/about`) }>About</button>
       <div className="cart-icon">
       <button className="btn-cart" align="right"> <IconButton  onClick={() => setLike(like + 0)} aria-label="like">
            <Badge  badgeContent="0" color="primary">
            <AddShoppingCartIcon></AddShoppingCartIcon>cart
            </Badge>
            </IconButton>
            </button>
            </div>
            </div>

      {route}
      </div>);
//   return(
// <div className="try">
//   <AppBar>
//     <Toolbar>
//     <ul className="lists">
//     <Link to="/">Home</Link>
//   </ul>
//  <button className="b">home</button>
//     </Toolbar>
//   </AppBar>

// </div>
//   );
}

