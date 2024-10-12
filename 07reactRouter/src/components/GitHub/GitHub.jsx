import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {

    const data= useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/TrupalPrajapati')   // bcz my followers is 0
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>GitHub Followers: {data.followers}
    <img className='rounded-xl ' src={data.avatar_url} alt="GitPic" width="300" /></div>
   
  )
}

export default GitHub

export const githubInfoLoader = async ()=>{
   const res = await fetch('https://api.github.com/users/TrupalPrajapati')
   return res.json();
}