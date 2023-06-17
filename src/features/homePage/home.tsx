import React, { useState } from "react";
import { userData } from "./util/utils";

const home = () => {
	const [userActivity,setUserActivity]=useState<any>()

  const handelActivity = (id: string) => {
    const activity = userData.activities.find((e) => e.id == id);
    
	setUserActivity(activity)
  };
  return (
    <div className="container-dashboard">
      <div className="dashboard">
        {userData.activities.map((value, i) => (
          <div
            key={i}
            className="activity-wrapper"
            onClick={() => handelActivity(value.id)}
          >
            <div
              dangerouslySetInnerHTML={{ __html: value.icon }}
              className="activity-icon"
            />
            <p className="activity-time">
              Duration: <span>{value.duration}</span>
            </p>
            <h6 className="activity-name">{value.name}</h6>
          </div>
        ))}
      </div>

      {userActivity&&
		<div className="dashboard">
          <div
            className="activity-wrapper user-activity"
          >
            <div
              dangerouslySetInnerHTML={{ __html: userActivity.icon }}
              className="activity-icon"
            />
         
            <h6 className="activity-name">{userActivity.name}</h6>
          </div>
       

	  </div>}
    </div>
  );
};

export default home;
