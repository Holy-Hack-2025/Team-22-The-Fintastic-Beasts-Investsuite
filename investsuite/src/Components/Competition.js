import React, { useEffect, useState } from "react";
import users from "./Users.json";

const Competition = () => {
  const [leaderboard, setSortedUsers] = useState([]);

  useEffect(() => {
    if (users.length > 0) {
      // Check if the users array is not empty
      const sortedData = [...users].sort(
        (a, b) => b.portfolioReturns - a.portfolioReturns
      );
      setSortedUsers(sortedData);
    }
  }, []);

  if (leaderboard.length === 0) return <div>Loading...</div>;

  return (
    <div className="content-area">
      <div className="podium">
        {leaderboard[0] && (
          <div className="podium-item first">
            <h3>1st</h3>
            <p>{leaderboard[0].name}</p>
            <span className="return">{leaderboard[0].portfolioReturns}%</span>
          </div>
        )}
        {leaderboard[1] && (
          <div className="podium-item second">
            <h3>2nd</h3>
            <p>{leaderboard[1].name}</p>
            <span className="return">{leaderboard[1].portfolioReturns}%</span>
          </div>
        )}
        {leaderboard[2] && (
          <div className="podium-item third">
            <h3>3rd</h3>
            <p>{leaderboard[2].name}</p>
            <span className="return">{leaderboard[2].portfolioReturns}%</span>
          </div>
        )}
      </div>

      <div className="leaderboard-list">
        {leaderboard.slice(3).map((user, index) => (
          <div key={index} className="leaderboard-item">
            <span className="rank">{index + 4}</span>
            <span className="name">{user.name}</span>
            <span className="return">{user.portfolioReturns}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competition;
