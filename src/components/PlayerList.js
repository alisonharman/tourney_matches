import React from "react"; //optional
import Player from "./Player";

function PlayerList(props) {

  const players = props.playerData.map(match => {
    return (
      <Player key={match.gamerTag} gamerTag={match.gamerTag} firstName={match.firstName} lastName={match.lastName} wins={match.wins} />
    )
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;