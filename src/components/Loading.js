import React from 'react'
import logo from '../images/LogoBusybag.png';

export default function Loading() {
    const style ={
        backgroundColor: "red",
        position: "absolute",
        zIndex: "10000",
    }
    
    return (
        <div className="full-page-loader">
            <img src={logo} width="200" alt="busybag logo"  />
      </div>
    )
}
