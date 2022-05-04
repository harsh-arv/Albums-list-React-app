import {useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/albums.css'





const Albums=  ()=>{
    var [data,setData]=useState([]);
    const  apiUrl='https://jsonplaceholder.typicode.com/albums'
    useEffect(()=>{
        axios.get(apiUrl)
          .then(res=>{
            // console.log(res.data);
            setData(res.data)
          })
          .catch(err=>{
            console.log(err);
          })
     },[])

    // console.log(data);
    return(
      <div>
          
    {data.map((data,id)=>{
      return <div key={id}>
        <h2>{data.title} </h2>
        <p>{data.userId}</p>
      </div>
    })}

      </div>
    )
    

}
export default Albums;

