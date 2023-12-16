import React from "react";
import { Link } from "react-router-dom";

const Best = () => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
    }
    const inline = {
        display :"flex",
        alignItems : "center",
        justifyContent : "space-around",
        backgroundColor : "white",
        opacity : "0.6",
        height : "150px",
        width : "400px",
        borderRadius : "6px",
    }
  
  return (
    <div style={container} className="best">
      <div style= {inline }>
       <Link to = '/login' className="btn btn-primary">Admin</Link>
       <Link to = '/login' className="btn btn-primary">Employee</Link>
      </div>
    </div>
  );
};

export default Best;
