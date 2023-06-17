import React, { useState } from "react";
import { userData } from "./util/utils";
import { Pie } from "react-chartjs-2";
import moment from "moment";

const home = () => {
  const [userActivity, setUserActivity] = useState<any>();

  const handelActivity = (id: string) => {
    const activity = userData.activities.find((e) => e.id == id);

    setUserActivity(activity);
  };
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: userActivity && [
          userActivity.heart_rate.max,
          userActivity.heart_rate.average,
        ],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
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

      {userActivity && (
        <div>
          <div className="dashboard">
            <div className="activity-wrapper user-activity">
              <div
                dangerouslySetInnerHTML={{ __html: userActivity.icon }}
                className="activity-icon"
              />

              <h6 className="activity-name">{userActivity.name}</h6>
            </div>
          </div>
          <div className="dashboard " >
			<div className="activity-wrapper ">
            <Pie data={data} />
			<h6 className="activity-name text-align-center mt-3">Heart Rate</h6>
			</div>
          </div>
		  <div className="dashboard " >
			<div className="activity-wrapper ">
			<p  className="activity-name text-align-center ">Activity Date </p>
            <h4 className="text-align-center">{moment(userActivity.date).format(' MMMM DD YYYY')}</h4>
			</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default home;
