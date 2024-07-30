
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [inputs , setInputs] = useState("");
  const [image , setImage] = useState("");
 useEffect(()=>{
  const response =  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${inputs}&client_id=Gd-hI89sM5rBQmBYtF8_YrvYw2QFMncSLNUx9a37VP4`);
  response.then(response => setImage(response.data.results[0].urls.raw));
 },[inputs])

  return (
    <>
           <div className='search'>
            <input type='text' onChange={(e)=>setInputs(e.target.value)}/>
            <img className='image' src={image} />
           </div> 
    </>
  )
}

export default App
