import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams/*, useHistory*/} from "react-router-dom";
//import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  //const {push} = useHistory();
  const params = useParams();
  const id = params.id;
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const fetchColors =(id)=>{
    axios 
    .get(`https://localhost:5000/api/colors/${id}`)
    .then((res)=>setColorList(res.data))
    .catch((err)=> console.log(err.response))
  }
  useEffect(()=>{
     fetchColors(id);

  },[])
   
  
 
    return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
  }
  


export default BubblePage;
