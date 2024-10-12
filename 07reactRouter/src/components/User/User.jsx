import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams();

  return (
    <div className=' m-20 bg-gray-600 text-xl items-center text-center text-white p-4'>
        User: {userid}
    </div>
  )
}

export default User