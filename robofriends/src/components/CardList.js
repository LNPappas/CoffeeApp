import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return <Card robot={robots[i]} key={i} />;
      })}
    </div>
  );
};

export default CardList;
