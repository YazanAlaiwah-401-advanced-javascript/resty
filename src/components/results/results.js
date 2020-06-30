import React from 'react';
// import './form.scss';
class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="continar">
        {this.props.count > 0 && (
          <pre>
            {JSON.stringify(
              {
                headers: this.props.headers,
                count: this.props.count,
                results: this.props.results,
              },
              null,
              2
            )}
          </pre>
        )}
      </div>
    );
  }
}
export default Results;
