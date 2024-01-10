import React, { useEffect } from 'react';
import '../../src/css/Dashboard.css';
import {dragElement} from '../util/dragging';
import Node from './Node'

const Dashboard = () => {

    useEffect(() => {
        dragElement(document.getElementById("dhsbrd"));
    }, [])

    return (
        <div className="container">
            <div className="dashboard" id="dhsbrd">
                    <Node />        
            </div>
        </div>
    );
  }

  export default Dashboard;
  