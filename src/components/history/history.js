import React from 'react';
const History = (props) => {
  const data = JSON.parse(localStorage.getItem('data'));
  const resulte = data.map((obj, i) => (
    <p key={i}>
      <span className="span">{obj.method}</span>
      {obj.url}
    </p>
  ));
  return <div>{resulte}</div>;
};

export default History;
