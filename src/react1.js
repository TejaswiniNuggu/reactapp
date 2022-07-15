import "./react1.css";
import { useState } from "react";

export default function User() {
  const users = [
    {
      name: "Vaibhav",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Tejaswini",
      pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Shreyas",
      pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
    },
  ];
//json data maping
  return (
    <div className="App">
    {users.map((m) => (
      <Welcome name={m.name} pic={m.pic}/>
      ))}
    </div>
  );
  return (
  <Counter />
  );
}
function Counter(){
//let like=100;
const [like, setLike]=useState(0);
const [dislike, setDisLike]=useState(0);
return(
  <div>
    <button onClick={()=> setLike(like+1)}>up{like}</button>
   
    <button onClick={()=> setDisLike(dislike+1)}>down{dislike}</button>
    
    </div>
);
}

// add image to output
function Welcome({name,pic}){
  return(
    <div>
    <img className="Im" src={pic} alt={name}/>
    <h1> {name} </h1>
    <Counter />
    </div>
  
  )
 
}

export function Msg(props){
  console.log(props)
  
  return
    <h1>hello {props.name} </h1>
}