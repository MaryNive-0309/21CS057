import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
    const[numberid,setnumberid]=useState();
    const[post,setPost]=useState(0);
    const[load,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:9876/numbers/${numberid}`)
        .then(res =>{
            setPost(res.data);
        })
        .catch(err=> {
            console.log(err);
        });
    },[numberid]);
    const handlenumberid=(e)=>{
        setnumberid(e.target.value);
    }

  return (
    <div>
        <h1> Average Calculator</h1>
        <div>
            <label for="numid">Enter NumberID: </label>
            <input type="text" id="numid" onChange={handlenumberid} placeholder='p, f, e, r'/>
            <button onClick={()=>setnumberid(numberid)}>Generate Data</button>
        </div>
        { load? (<p>Loading...</p>): post && (
            <div>
                <h2>windowPrevState:  {post.windowPrevState.join(', ')} </h2>
                <h2>WindowCurrentState: {post.windowCurrState.join(', ')} </h2>
                <h2>numbers: {post.numbers.join(', ')}</h2>
                <h2>average: {post.avg}</h2>
            </div>
        )}
    </div>
  );
}
