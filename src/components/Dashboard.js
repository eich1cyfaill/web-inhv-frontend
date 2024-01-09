import React, { useEffect } from 'react';
import '../../src/css/Dashboard.css';
import '../util/dragging';




const Dashboard = () => {

    useEffect(() => {
        dragElement(document.getElementById("dhsbrd"));
    }, [])

    return (
        <div className="container">
            <div className="dashboard" id="dhsbrd">
                Dashboard
            </div>
        </div>
    );
  }
  


  
  export default Dashboard;
  