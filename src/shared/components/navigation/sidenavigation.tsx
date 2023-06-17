import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
const Sidenavigation = () => {
    const [location,setLocation] = useState('')
    const  state  = useLocation();
    useEffect(() => {
        setLocation(state.pathname)
    }, [])
  return (
    <div className="side-navigation">
      <ul>
        <li  className="side-nave-list">
             <a className={`side-nave ${["/", "/dashboard"].includes(location)&&'activ-nav'}`} href="/dashboard"><FontAwesomeIcon icon={faChartLine} /><span className="nav-text">Dashboard</span></a>
        </li>
        <li className="side-nave-list">
             <a className={`side-nave ${location==='/heartrate' &&'activ-nav'}`} href="/heartrate"><FontAwesomeIcon icon={faWaveSquare} /><span className="nav-text">Heart Rate</span></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenavigation;
