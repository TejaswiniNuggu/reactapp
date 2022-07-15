import {useEffect, useState} from "react";
import IconButton  from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete"
import  Badge  from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail"
export function Counter() {
    //let like=100;
    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);
    const incrementalLike=()=>setLike(like + 1);
    const incrementalDisLike=()=>setDisLike(dislike + 1);

    useEffect(()=>{
        console.log("like is updated",like);
    },[like,dislike]);
    return (
        <div>
            <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="like">
            <Badge  badgeContent={like} color="primary">
            👍
            </Badge>
            </IconButton>
           
            <IconButton color="error" onClick={() => setDisLike(dislike + 1)} aria-label="dislike">
            👎{dislike}
            </IconButton>
            {/* <button className="btn-like"onClick={() => setLike(like + 1)}>👍{like}</button> */}

            {/* <button className="btn-dlike"onClick={() => setDisLike(dislike + 1)}>👎{dislike}</button> */}

        </div>
    );
}
