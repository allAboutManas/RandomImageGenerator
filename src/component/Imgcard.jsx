import React from "react";
import styles from "./imgcard.module.css";
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Imgcard() {
    const [data, setData] = useState();
  const[value,setValue]=useState(0)

    function handleClick(){
        setValue(value+1)
        
    }
    useEffect(()=>{
        async function fetchData(){
          let response = await axios.get('https://dog.ceo/api/breeds/image/random')
          setData(response.data.message);
          
        }
        fetchData();
      },[value])
   

  return (
    <div>
      <div className={styles.crd}>
        <img src={data} width="100%" alt="" />
        <p className={styles.para}>Dog</p>
        <button onClick={handleClick}>Change Image
      </button>
      </div>
      
    </div>
  );
}
