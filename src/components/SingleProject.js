import React from 'react'
import { useHistory, useParams } from 'react-router-dom';


export default function SingleProject({match, location}) {
  
  const {
    params: { userId }
  } = match;
  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
    </>
  )
}
