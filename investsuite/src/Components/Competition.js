import React from "react";

const Competition = () => {
  const leaderboard = [
    { name: "Mert", returns: "+10%" },
    { name: "Maxim", returns: "+8%" },
    { name: "Alex", returns: "+5%" },
    { name: "Line", returns: "+3%" },
    { name: "Laura", returns: "+1%" },
    { name: "Robbe", returns: "+10%" },
    { name: "Lucas", returns: "+8%" },
    { name: "Tiemen", returns: "+5%" },
    { name: "Arthur", returns: "+3%" },
    { name: "Senne", returns: "+1%" },
  ];

  return (
    <div className="content-area">
      <div className="leaderboard">
        <div className="podium">
          <div className="podium-item first">
            <h3>1st</h3>
            <p>{leaderboard[0].name}</p>
            <span className="score">{leaderboard[0].score}</span>
            <span className="return">{leaderboard[0].returns}</span>
          </div>
          <div className="podium-item second">
            <h3>2nd</h3>
            <p>{leaderboard[1].name}</p>
            <span className="score">{leaderboard[1].score}</span>
            <span className="return">{leaderboard[1].returns}</span>
          </div>
          <div className="podium-item third">
            <h3>3rd</h3>
            <p>{leaderboard[2].name}</p>
            <span className="score">{leaderboard[2].score}</span>
            <span className="return">{leaderboard[2].returns}</span>
          </div>
        </div>
      </div>

      <div className="leaderboard-list">
        {leaderboard.slice(3).map((user, index) => (
          <div key={index} className="leaderboard-item">
            <span className="rank">{index + 4}</span>
            <span className="name">{user.name}</span>
            <span className="score">{user.returns}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competition;
