import React from 'react';
import ReactJson from 'react-json-view';
function Results(props) {
  return (
    <div>
      <ReactJson
        src={{
          headers: props.headers,
          count: props.count,
          results: props.results,
        }}
      />
    </div>
  );
}
export default Results;
