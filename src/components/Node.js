import React, { useEffect } from 'react';
import '../../src/css/Node.css'
import {dragElement} from '../util/dragging';

const Node = () => {

  useEffect(() => {
    dragElement(document.getElementById("node"));
  }, [])

    return (
        <div className="node" id="node">
            1
        </div>
    );
  }
  
export default Node;
  