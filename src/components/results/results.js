import React from 'react';
// import './form.scss';
function Results(props) {
  return (
    <div className="continar">
      {props.count > 0 && (
        <pre>
          {JSON.stringify(
            {
              headers: props.headers,
              count: props.count,
              results: props.results,
            },
            null,
            2
          )}
        </pre>
      )}
    </div>
  );
}
export default Results;
