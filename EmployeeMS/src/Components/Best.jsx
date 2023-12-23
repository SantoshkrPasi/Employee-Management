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
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        opacity : "0.6",
        height : "150px",
        width : "400px",
        borderRadius : "6px",
    }
  
  return (
    <div style={container} className="best">
      <div style= {inline }>
       <Link to = '/adminlogin' className="btn btn-primary">Admin</Link>
       <Link to = '/employeelogin' className="btn btn-primary">Employee</Link>
      </div>
    </div>
  );
};

export default Best;
