import React from 'react'
import gif1 from '../Media/Loading.gif'

export default function Loader() {
    return (
        <div>
             <p>Loading...</p>
             <img src={gif1} alt='gif loader'/>
     </div>
    )
}