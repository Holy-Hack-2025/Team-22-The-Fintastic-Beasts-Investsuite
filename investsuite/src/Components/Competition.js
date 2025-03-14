import React from "react";

const Competition = () => {
  const leaderboard = [
    { name: "User 1", returns: "+10%" },
    { name: "User 2", returns: "+8%" },
    { name: "User 3", returns: "+5%" },
  ];

  return (
    <div className="content-area">
      <h2>Investment Competition</h2>
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Returns</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.returns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Competition;
